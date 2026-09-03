# `appconfigExperimentDefinition` Submodule <a name="`appconfigExperimentDefinition` Submodule" id="@cdktn/provider-awscc.appconfigExperimentDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppconfigExperimentDefinition <a name="AppconfigExperimentDefinition" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition awscc_appconfig_experiment_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appconfigexperimentdefinition"

appconfigexperimentdefinition.NewAppconfigExperimentDefinition(scope Construct, id *string, config AppconfigExperimentDefinitionConfig) AppconfigExperimentDefinition
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig">AppconfigExperimentDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig">AppconfigExperimentDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.putControl">PutControl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.putTreatments">PutTreatments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.resetAudienceDescription">ResetAudienceDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.resetHypothesis">ResetHypothesis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.resetLaunchCriteria">ResetLaunchCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutControl` <a name="PutControl" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.putControl"></a>

```go
func PutControl(value AppconfigExperimentDefinitionControl)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.putControl.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl">AppconfigExperimentDefinitionControl</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTreatments` <a name="PutTreatments" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.putTreatments"></a>

```go
func PutTreatments(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.putTreatments.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAudienceDescription` <a name="ResetAudienceDescription" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.resetAudienceDescription"></a>

```go
func ResetAudienceDescription()
```

##### `ResetHypothesis` <a name="ResetHypothesis" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.resetHypothesis"></a>

```go
func ResetHypothesis()
```

##### `ResetLaunchCriteria` <a name="ResetLaunchCriteria" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.resetLaunchCriteria"></a>

```go
func ResetLaunchCriteria()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AppconfigExperimentDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appconfigexperimentdefinition"

appconfigexperimentdefinition.AppconfigExperimentDefinition_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appconfigexperimentdefinition"

appconfigexperimentdefinition.AppconfigExperimentDefinition_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appconfigexperimentdefinition"

appconfigexperimentdefinition.AppconfigExperimentDefinition_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appconfigexperimentdefinition"

appconfigexperimentdefinition.AppconfigExperimentDefinition_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a AppconfigExperimentDefinition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AppconfigExperimentDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AppconfigExperimentDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the AppconfigExperimentDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.applicationId">ApplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.control">Control</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference">AppconfigExperimentDefinitionControlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.experimentDefinitionId">ExperimentDefinitionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList">AppconfigExperimentDefinitionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.treatments">Treatments</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList">AppconfigExperimentDefinitionTreatmentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.applicationIdentifierInput">ApplicationIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.audienceDescriptionInput">AudienceDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.audienceRuleInput">AudienceRuleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.configurationProfileIdentifierInput">ConfigurationProfileIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.controlInput">ControlInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.environmentIdentifierInput">EnvironmentIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.flagKeyInput">FlagKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.hypothesisInput">HypothesisInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.launchCriteriaInput">LaunchCriteriaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.treatmentsInput">TreatmentsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.applicationIdentifier">ApplicationIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.audienceDescription">AudienceDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.audienceRule">AudienceRule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.configurationProfileIdentifier">ConfigurationProfileIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.environmentIdentifier">EnvironmentIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.flagKey">FlagKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.hypothesis">Hypothesis</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.launchCriteria">LaunchCriteria</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.applicationId"></a>

```go
func ApplicationId() *string
```

- *Type:* *string

---

##### `Control`<sup>Required</sup> <a name="Control" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.control"></a>

```go
func Control() AppconfigExperimentDefinitionControlOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference">AppconfigExperimentDefinitionControlOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `ExperimentDefinitionId`<sup>Required</sup> <a name="ExperimentDefinitionId" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.experimentDefinitionId"></a>

```go
func ExperimentDefinitionId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.tags"></a>

```go
func Tags() AppconfigExperimentDefinitionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList">AppconfigExperimentDefinitionTagsList</a>

---

##### `Treatments`<sup>Required</sup> <a name="Treatments" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.treatments"></a>

```go
func Treatments() AppconfigExperimentDefinitionTreatmentsList
```

- *Type:* <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList">AppconfigExperimentDefinitionTreatmentsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `ApplicationIdentifierInput`<sup>Optional</sup> <a name="ApplicationIdentifierInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.applicationIdentifierInput"></a>

```go
func ApplicationIdentifierInput() *string
```

- *Type:* *string

---

##### `AudienceDescriptionInput`<sup>Optional</sup> <a name="AudienceDescriptionInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.audienceDescriptionInput"></a>

```go
func AudienceDescriptionInput() *string
```

- *Type:* *string

---

##### `AudienceRuleInput`<sup>Optional</sup> <a name="AudienceRuleInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.audienceRuleInput"></a>

```go
func AudienceRuleInput() *string
```

- *Type:* *string

---

##### `ConfigurationProfileIdentifierInput`<sup>Optional</sup> <a name="ConfigurationProfileIdentifierInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.configurationProfileIdentifierInput"></a>

```go
func ConfigurationProfileIdentifierInput() *string
```

- *Type:* *string

---

##### `ControlInput`<sup>Optional</sup> <a name="ControlInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.controlInput"></a>

```go
func ControlInput() interface{}
```

- *Type:* interface{}

---

##### `EnvironmentIdentifierInput`<sup>Optional</sup> <a name="EnvironmentIdentifierInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.environmentIdentifierInput"></a>

```go
func EnvironmentIdentifierInput() *string
```

- *Type:* *string

---

##### `FlagKeyInput`<sup>Optional</sup> <a name="FlagKeyInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.flagKeyInput"></a>

```go
func FlagKeyInput() *string
```

- *Type:* *string

---

##### `HypothesisInput`<sup>Optional</sup> <a name="HypothesisInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.hypothesisInput"></a>

```go
func HypothesisInput() *string
```

- *Type:* *string

---

##### `LaunchCriteriaInput`<sup>Optional</sup> <a name="LaunchCriteriaInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.launchCriteriaInput"></a>

```go
func LaunchCriteriaInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TreatmentsInput`<sup>Optional</sup> <a name="TreatmentsInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.treatmentsInput"></a>

```go
func TreatmentsInput() interface{}
```

- *Type:* interface{}

---

##### `ApplicationIdentifier`<sup>Required</sup> <a name="ApplicationIdentifier" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.applicationIdentifier"></a>

```go
func ApplicationIdentifier() *string
```

- *Type:* *string

---

##### `AudienceDescription`<sup>Required</sup> <a name="AudienceDescription" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.audienceDescription"></a>

```go
func AudienceDescription() *string
```

- *Type:* *string

---

##### `AudienceRule`<sup>Required</sup> <a name="AudienceRule" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.audienceRule"></a>

```go
func AudienceRule() *string
```

- *Type:* *string

---

##### `ConfigurationProfileIdentifier`<sup>Required</sup> <a name="ConfigurationProfileIdentifier" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.configurationProfileIdentifier"></a>

```go
func ConfigurationProfileIdentifier() *string
```

- *Type:* *string

---

##### `EnvironmentIdentifier`<sup>Required</sup> <a name="EnvironmentIdentifier" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.environmentIdentifier"></a>

```go
func EnvironmentIdentifier() *string
```

- *Type:* *string

---

##### `FlagKey`<sup>Required</sup> <a name="FlagKey" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.flagKey"></a>

```go
func FlagKey() *string
```

- *Type:* *string

---

##### `Hypothesis`<sup>Required</sup> <a name="Hypothesis" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.hypothesis"></a>

```go
func Hypothesis() *string
```

- *Type:* *string

---

##### `LaunchCriteria`<sup>Required</sup> <a name="LaunchCriteria" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.launchCriteria"></a>

```go
func LaunchCriteria() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AppconfigExperimentDefinitionConfig <a name="AppconfigExperimentDefinitionConfig" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appconfigexperimentdefinition"

&appconfigexperimentdefinition.AppconfigExperimentDefinitionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ApplicationIdentifier: *string,
	AudienceRule: *string,
	ConfigurationProfileIdentifier: *string,
	Control: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl,
	EnvironmentIdentifier: *string,
	FlagKey: *string,
	Name: *string,
	Treatments: interface{},
	AudienceDescription: *string,
	Hypothesis: *string,
	LaunchCriteria: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.applicationIdentifier">ApplicationIdentifier</a></code> | <code>*string</code> | The application ID, name, or ARN. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.audienceRule">AudienceRule</a></code> | <code>*string</code> | Rule expression defining the experiment audience. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.configurationProfileIdentifier">ConfigurationProfileIdentifier</a></code> | <code>*string</code> | The configuration profile ID, name, or ARN. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.control">Control</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl">AppconfigExperimentDefinitionControl</a></code> | The control (baseline) variant. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.environmentIdentifier">EnvironmentIdentifier</a></code> | <code>*string</code> | The environment ID, name, or ARN. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.flagKey">FlagKey</a></code> | <code>*string</code> | The key of the existing flag in the configuration profile to experiment on. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.name">Name</a></code> | <code>*string</code> | A name for the experiment definition. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.treatments">Treatments</a></code> | <code>interface{}</code> | Treatment variants (1-5). |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.audienceDescription">AudienceDescription</a></code> | <code>*string</code> | Human-readable description of the audience. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.hypothesis">Hypothesis</a></code> | <code>*string</code> | The hypothesis of the experiment. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.launchCriteria">LaunchCriteria</a></code> | <code>*string</code> | Criteria for launching the experiment. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Tags to associate with the experiment definition. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApplicationIdentifier`<sup>Required</sup> <a name="ApplicationIdentifier" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.applicationIdentifier"></a>

```go
ApplicationIdentifier *string
```

- *Type:* *string

The application ID, name, or ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#application_identifier AppconfigExperimentDefinition#application_identifier}

---

##### `AudienceRule`<sup>Required</sup> <a name="AudienceRule" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.audienceRule"></a>

```go
AudienceRule *string
```

- *Type:* *string

Rule expression defining the experiment audience.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#audience_rule AppconfigExperimentDefinition#audience_rule}

---

##### `ConfigurationProfileIdentifier`<sup>Required</sup> <a name="ConfigurationProfileIdentifier" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.configurationProfileIdentifier"></a>

```go
ConfigurationProfileIdentifier *string
```

- *Type:* *string

The configuration profile ID, name, or ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#configuration_profile_identifier AppconfigExperimentDefinition#configuration_profile_identifier}

---

##### `Control`<sup>Required</sup> <a name="Control" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.control"></a>

```go
Control AppconfigExperimentDefinitionControl
```

- *Type:* <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl">AppconfigExperimentDefinitionControl</a>

The control (baseline) variant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#control AppconfigExperimentDefinition#control}

---

##### `EnvironmentIdentifier`<sup>Required</sup> <a name="EnvironmentIdentifier" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.environmentIdentifier"></a>

```go
EnvironmentIdentifier *string
```

- *Type:* *string

The environment ID, name, or ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#environment_identifier AppconfigExperimentDefinition#environment_identifier}

---

##### `FlagKey`<sup>Required</sup> <a name="FlagKey" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.flagKey"></a>

```go
FlagKey *string
```

- *Type:* *string

The key of the existing flag in the configuration profile to experiment on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#flag_key AppconfigExperimentDefinition#flag_key}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

A name for the experiment definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#name AppconfigExperimentDefinition#name}

---

##### `Treatments`<sup>Required</sup> <a name="Treatments" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.treatments"></a>

```go
Treatments interface{}
```

- *Type:* interface{}

Treatment variants (1-5).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#treatments AppconfigExperimentDefinition#treatments}

---

##### `AudienceDescription`<sup>Optional</sup> <a name="AudienceDescription" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.audienceDescription"></a>

```go
AudienceDescription *string
```

- *Type:* *string

Human-readable description of the audience.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#audience_description AppconfigExperimentDefinition#audience_description}

---

##### `Hypothesis`<sup>Optional</sup> <a name="Hypothesis" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.hypothesis"></a>

```go
Hypothesis *string
```

- *Type:* *string

The hypothesis of the experiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#hypothesis AppconfigExperimentDefinition#hypothesis}

---

##### `LaunchCriteria`<sup>Optional</sup> <a name="LaunchCriteria" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.launchCriteria"></a>

```go
LaunchCriteria *string
```

- *Type:* *string

Criteria for launching the experiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#launch_criteria AppconfigExperimentDefinition#launch_criteria}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Tags to associate with the experiment definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#tags AppconfigExperimentDefinition#tags}

---

### AppconfigExperimentDefinitionControl <a name="AppconfigExperimentDefinitionControl" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appconfigexperimentdefinition"

&appconfigexperimentdefinition.AppconfigExperimentDefinitionControl {
	Enabled: interface{},
	Weight: *f64,
	AttributeValues: interface{},
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether the flag is enabled for this variant. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl.property.weight">Weight</a></code> | <code>*f64</code> | Traffic weight percentage. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl.property.attributeValues">AttributeValues</a></code> | <code>interface{}</code> | Map of attribute name to attribute value. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#description AppconfigExperimentDefinition#description}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether the flag is enabled for this variant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#enabled AppconfigExperimentDefinition#enabled}

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl.property.weight"></a>

```go
Weight *f64
```

- *Type:* *f64

Traffic weight percentage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#weight AppconfigExperimentDefinition#weight}

---

##### `AttributeValues`<sup>Optional</sup> <a name="AttributeValues" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl.property.attributeValues"></a>

```go
AttributeValues interface{}
```

- *Type:* interface{}

Map of attribute name to attribute value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#attribute_values AppconfigExperimentDefinition#attribute_values}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#description AppconfigExperimentDefinition#description}.

---

### AppconfigExperimentDefinitionControlAttributeValues <a name="AppconfigExperimentDefinitionControlAttributeValues" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appconfigexperimentdefinition"

&appconfigexperimentdefinition.AppconfigExperimentDefinitionControlAttributeValues {
	BooleanValue: interface{},
	NumberArray: *[]*f64,
	NumberValue: *f64,
	StringArray: *[]*string,
	StringValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues.property.booleanValue">BooleanValue</a></code> | <code>interface{}</code> | A boolean value. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues.property.numberArray">NumberArray</a></code> | <code>*[]*f64</code> | An array of numeric values. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues.property.numberValue">NumberValue</a></code> | <code>*f64</code> | A numeric value. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues.property.stringArray">StringArray</a></code> | <code>*[]*string</code> | An array of string values. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues.property.stringValue">StringValue</a></code> | <code>*string</code> | A string value. |

---

##### `BooleanValue`<sup>Optional</sup> <a name="BooleanValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues.property.booleanValue"></a>

```go
BooleanValue interface{}
```

- *Type:* interface{}

A boolean value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#boolean_value AppconfigExperimentDefinition#boolean_value}

---

##### `NumberArray`<sup>Optional</sup> <a name="NumberArray" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues.property.numberArray"></a>

```go
NumberArray *[]*f64
```

- *Type:* *[]*f64

An array of numeric values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#number_array AppconfigExperimentDefinition#number_array}

---

##### `NumberValue`<sup>Optional</sup> <a name="NumberValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues.property.numberValue"></a>

```go
NumberValue *f64
```

- *Type:* *f64

A numeric value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#number_value AppconfigExperimentDefinition#number_value}

---

##### `StringArray`<sup>Optional</sup> <a name="StringArray" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues.property.stringArray"></a>

```go
StringArray *[]*string
```

- *Type:* *[]*string

An array of string values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#string_array AppconfigExperimentDefinition#string_array}

---

##### `StringValue`<sup>Optional</sup> <a name="StringValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues.property.stringValue"></a>

```go
StringValue *string
```

- *Type:* *string

A string value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#string_value AppconfigExperimentDefinition#string_value}

---

### AppconfigExperimentDefinitionTags <a name="AppconfigExperimentDefinitionTags" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appconfigexperimentdefinition"

&appconfigexperimentdefinition.AppconfigExperimentDefinitionTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags.property.key">Key</a></code> | <code>*string</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags.property.value">Value</a></code> | <code>*string</code> | The tag value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#key AppconfigExperimentDefinition#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#value AppconfigExperimentDefinition#value}

---

### AppconfigExperimentDefinitionTreatments <a name="AppconfigExperimentDefinitionTreatments" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appconfigexperimentdefinition"

&appconfigexperimentdefinition.AppconfigExperimentDefinitionTreatments {
	Enabled: interface{},
	Weight: *f64,
	AttributeValues: interface{},
	Description: *string,
	Key: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether the flag is enabled for this variant. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments.property.weight">Weight</a></code> | <code>*f64</code> | Traffic weight percentage. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments.property.attributeValues">AttributeValues</a></code> | <code>interface{}</code> | Map of attribute name to attribute value. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#description AppconfigExperimentDefinition#description}. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments.property.key">Key</a></code> | <code>*string</code> | The treatment key (read-only, auto-generated by service). |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether the flag is enabled for this variant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#enabled AppconfigExperimentDefinition#enabled}

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments.property.weight"></a>

```go
Weight *f64
```

- *Type:* *f64

Traffic weight percentage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#weight AppconfigExperimentDefinition#weight}

---

##### `AttributeValues`<sup>Optional</sup> <a name="AttributeValues" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments.property.attributeValues"></a>

```go
AttributeValues interface{}
```

- *Type:* interface{}

Map of attribute name to attribute value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#attribute_values AppconfigExperimentDefinition#attribute_values}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#description AppconfigExperimentDefinition#description}.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments.property.key"></a>

```go
Key *string
```

- *Type:* *string

The treatment key (read-only, auto-generated by service).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#key AppconfigExperimentDefinition#key}

---

### AppconfigExperimentDefinitionTreatmentsAttributeValues <a name="AppconfigExperimentDefinitionTreatmentsAttributeValues" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appconfigexperimentdefinition"

&appconfigexperimentdefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues {
	BooleanValue: interface{},
	NumberArray: *[]*f64,
	NumberValue: *f64,
	StringArray: *[]*string,
	StringValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues.property.booleanValue">BooleanValue</a></code> | <code>interface{}</code> | A boolean value. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues.property.numberArray">NumberArray</a></code> | <code>*[]*f64</code> | An array of numeric values. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues.property.numberValue">NumberValue</a></code> | <code>*f64</code> | A numeric value. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues.property.stringArray">StringArray</a></code> | <code>*[]*string</code> | An array of string values. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues.property.stringValue">StringValue</a></code> | <code>*string</code> | A string value. |

---

##### `BooleanValue`<sup>Optional</sup> <a name="BooleanValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues.property.booleanValue"></a>

```go
BooleanValue interface{}
```

- *Type:* interface{}

A boolean value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#boolean_value AppconfigExperimentDefinition#boolean_value}

---

##### `NumberArray`<sup>Optional</sup> <a name="NumberArray" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues.property.numberArray"></a>

```go
NumberArray *[]*f64
```

- *Type:* *[]*f64

An array of numeric values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#number_array AppconfigExperimentDefinition#number_array}

---

##### `NumberValue`<sup>Optional</sup> <a name="NumberValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues.property.numberValue"></a>

```go
NumberValue *f64
```

- *Type:* *f64

A numeric value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#number_value AppconfigExperimentDefinition#number_value}

---

##### `StringArray`<sup>Optional</sup> <a name="StringArray" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues.property.stringArray"></a>

```go
StringArray *[]*string
```

- *Type:* *[]*string

An array of string values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#string_array AppconfigExperimentDefinition#string_array}

---

##### `StringValue`<sup>Optional</sup> <a name="StringValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues.property.stringValue"></a>

```go
StringValue *string
```

- *Type:* *string

A string value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#string_value AppconfigExperimentDefinition#string_value}

---

## Classes <a name="Classes" id="Classes"></a>

### AppconfigExperimentDefinitionControlAttributeValuesMap <a name="AppconfigExperimentDefinitionControlAttributeValuesMap" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appconfigexperimentdefinition"

appconfigexperimentdefinition.NewAppconfigExperimentDefinitionControlAttributeValuesMap(terraformResource IInterpolatingParent, terraformAttribute *string) AppconfigExperimentDefinitionControlAttributeValuesMap
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.get"></a>

```go
func Get(key *string) AppconfigExperimentDefinitionControlAttributeValuesOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.get.parameter.key"></a>

- *Type:* *string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppconfigExperimentDefinitionControlAttributeValuesOutputReference <a name="AppconfigExperimentDefinitionControlAttributeValuesOutputReference" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appconfigexperimentdefinition"

appconfigexperimentdefinition.NewAppconfigExperimentDefinitionControlAttributeValuesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectKey *string) AppconfigExperimentDefinitionControlAttributeValuesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>*string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* *string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.resetBooleanValue">ResetBooleanValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.resetNumberArray">ResetNumberArray</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.resetNumberValue">ResetNumberValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.resetStringArray">ResetStringArray</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.resetStringValue">ResetStringValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBooleanValue` <a name="ResetBooleanValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.resetBooleanValue"></a>

```go
func ResetBooleanValue()
```

##### `ResetNumberArray` <a name="ResetNumberArray" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.resetNumberArray"></a>

```go
func ResetNumberArray()
```

##### `ResetNumberValue` <a name="ResetNumberValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.resetNumberValue"></a>

```go
func ResetNumberValue()
```

##### `ResetStringArray` <a name="ResetStringArray" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.resetStringArray"></a>

```go
func ResetStringArray()
```

##### `ResetStringValue` <a name="ResetStringValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.resetStringValue"></a>

```go
func ResetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.booleanValueInput">BooleanValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.numberArrayInput">NumberArrayInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.numberValueInput">NumberValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.stringArrayInput">StringArrayInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.stringValueInput">StringValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.booleanValue">BooleanValue</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.numberArray">NumberArray</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.numberValue">NumberValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.stringArray">StringArray</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.stringValue">StringValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BooleanValueInput`<sup>Optional</sup> <a name="BooleanValueInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.booleanValueInput"></a>

```go
func BooleanValueInput() interface{}
```

- *Type:* interface{}

---

##### `NumberArrayInput`<sup>Optional</sup> <a name="NumberArrayInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.numberArrayInput"></a>

```go
func NumberArrayInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `NumberValueInput`<sup>Optional</sup> <a name="NumberValueInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.numberValueInput"></a>

```go
func NumberValueInput() *f64
```

- *Type:* *f64

---

##### `StringArrayInput`<sup>Optional</sup> <a name="StringArrayInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.stringArrayInput"></a>

```go
func StringArrayInput() *[]*string
```

- *Type:* *[]*string

---

##### `StringValueInput`<sup>Optional</sup> <a name="StringValueInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.stringValueInput"></a>

```go
func StringValueInput() *string
```

- *Type:* *string

---

##### `BooleanValue`<sup>Required</sup> <a name="BooleanValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.booleanValue"></a>

```go
func BooleanValue() interface{}
```

- *Type:* interface{}

---

##### `NumberArray`<sup>Required</sup> <a name="NumberArray" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.numberArray"></a>

```go
func NumberArray() *[]*f64
```

- *Type:* *[]*f64

---

##### `NumberValue`<sup>Required</sup> <a name="NumberValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.numberValue"></a>

```go
func NumberValue() *f64
```

- *Type:* *f64

---

##### `StringArray`<sup>Required</sup> <a name="StringArray" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.stringArray"></a>

```go
func StringArray() *[]*string
```

- *Type:* *[]*string

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.stringValue"></a>

```go
func StringValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppconfigExperimentDefinitionControlOutputReference <a name="AppconfigExperimentDefinitionControlOutputReference" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appconfigexperimentdefinition"

appconfigexperimentdefinition.NewAppconfigExperimentDefinitionControlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppconfigExperimentDefinitionControlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.putAttributeValues">PutAttributeValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.resetAttributeValues">ResetAttributeValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAttributeValues` <a name="PutAttributeValues" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.putAttributeValues"></a>

```go
func PutAttributeValues(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.putAttributeValues.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAttributeValues` <a name="ResetAttributeValues" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.resetAttributeValues"></a>

```go
func ResetAttributeValues()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.attributeValues">AttributeValues</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap">AppconfigExperimentDefinitionControlAttributeValuesMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.attributeValuesInput">AttributeValuesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.weightInput">WeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttributeValues`<sup>Required</sup> <a name="AttributeValues" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.attributeValues"></a>

```go
func AttributeValues() AppconfigExperimentDefinitionControlAttributeValuesMap
```

- *Type:* <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap">AppconfigExperimentDefinitionControlAttributeValuesMap</a>

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `AttributeValuesInput`<sup>Optional</sup> <a name="AttributeValuesInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.attributeValuesInput"></a>

```go
func AttributeValuesInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.weightInput"></a>

```go
func WeightInput() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppconfigExperimentDefinitionTagsList <a name="AppconfigExperimentDefinitionTagsList" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appconfigexperimentdefinition"

appconfigexperimentdefinition.NewAppconfigExperimentDefinitionTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AppconfigExperimentDefinitionTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.get"></a>

```go
func Get(index *f64) AppconfigExperimentDefinitionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppconfigExperimentDefinitionTagsOutputReference <a name="AppconfigExperimentDefinitionTagsOutputReference" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appconfigexperimentdefinition"

appconfigexperimentdefinition.NewAppconfigExperimentDefinitionTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AppconfigExperimentDefinitionTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppconfigExperimentDefinitionTreatmentsAttributeValuesMap <a name="AppconfigExperimentDefinitionTreatmentsAttributeValuesMap" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appconfigexperimentdefinition"

appconfigexperimentdefinition.NewAppconfigExperimentDefinitionTreatmentsAttributeValuesMap(terraformResource IInterpolatingParent, terraformAttribute *string) AppconfigExperimentDefinitionTreatmentsAttributeValuesMap
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.get"></a>

```go
func Get(key *string) AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.get.parameter.key"></a>

- *Type:* *string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference <a name="AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appconfigexperimentdefinition"

appconfigexperimentdefinition.NewAppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectKey *string) AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>*string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* *string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resetBooleanValue">ResetBooleanValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resetNumberArray">ResetNumberArray</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resetNumberValue">ResetNumberValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resetStringArray">ResetStringArray</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resetStringValue">ResetStringValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBooleanValue` <a name="ResetBooleanValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resetBooleanValue"></a>

```go
func ResetBooleanValue()
```

##### `ResetNumberArray` <a name="ResetNumberArray" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resetNumberArray"></a>

```go
func ResetNumberArray()
```

##### `ResetNumberValue` <a name="ResetNumberValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resetNumberValue"></a>

```go
func ResetNumberValue()
```

##### `ResetStringArray` <a name="ResetStringArray" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resetStringArray"></a>

```go
func ResetStringArray()
```

##### `ResetStringValue` <a name="ResetStringValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resetStringValue"></a>

```go
func ResetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.booleanValueInput">BooleanValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.numberArrayInput">NumberArrayInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.numberValueInput">NumberValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.stringArrayInput">StringArrayInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.stringValueInput">StringValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.booleanValue">BooleanValue</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.numberArray">NumberArray</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.numberValue">NumberValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.stringArray">StringArray</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.stringValue">StringValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BooleanValueInput`<sup>Optional</sup> <a name="BooleanValueInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.booleanValueInput"></a>

```go
func BooleanValueInput() interface{}
```

- *Type:* interface{}

---

##### `NumberArrayInput`<sup>Optional</sup> <a name="NumberArrayInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.numberArrayInput"></a>

```go
func NumberArrayInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `NumberValueInput`<sup>Optional</sup> <a name="NumberValueInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.numberValueInput"></a>

```go
func NumberValueInput() *f64
```

- *Type:* *f64

---

##### `StringArrayInput`<sup>Optional</sup> <a name="StringArrayInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.stringArrayInput"></a>

```go
func StringArrayInput() *[]*string
```

- *Type:* *[]*string

---

##### `StringValueInput`<sup>Optional</sup> <a name="StringValueInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.stringValueInput"></a>

```go
func StringValueInput() *string
```

- *Type:* *string

---

##### `BooleanValue`<sup>Required</sup> <a name="BooleanValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.booleanValue"></a>

```go
func BooleanValue() interface{}
```

- *Type:* interface{}

---

##### `NumberArray`<sup>Required</sup> <a name="NumberArray" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.numberArray"></a>

```go
func NumberArray() *[]*f64
```

- *Type:* *[]*f64

---

##### `NumberValue`<sup>Required</sup> <a name="NumberValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.numberValue"></a>

```go
func NumberValue() *f64
```

- *Type:* *f64

---

##### `StringArray`<sup>Required</sup> <a name="StringArray" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.stringArray"></a>

```go
func StringArray() *[]*string
```

- *Type:* *[]*string

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.stringValue"></a>

```go
func StringValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppconfigExperimentDefinitionTreatmentsList <a name="AppconfigExperimentDefinitionTreatmentsList" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appconfigexperimentdefinition"

appconfigexperimentdefinition.NewAppconfigExperimentDefinitionTreatmentsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AppconfigExperimentDefinitionTreatmentsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.get"></a>

```go
func Get(index *f64) AppconfigExperimentDefinitionTreatmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppconfigExperimentDefinitionTreatmentsOutputReference <a name="AppconfigExperimentDefinitionTreatmentsOutputReference" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appconfigexperimentdefinition"

appconfigexperimentdefinition.NewAppconfigExperimentDefinitionTreatmentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AppconfigExperimentDefinitionTreatmentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.putAttributeValues">PutAttributeValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.resetAttributeValues">ResetAttributeValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.resetKey">ResetKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAttributeValues` <a name="PutAttributeValues" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.putAttributeValues"></a>

```go
func PutAttributeValues(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.putAttributeValues.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAttributeValues` <a name="ResetAttributeValues" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.resetAttributeValues"></a>

```go
func ResetAttributeValues()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.resetKey"></a>

```go
func ResetKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.attributeValues">AttributeValues</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap">AppconfigExperimentDefinitionTreatmentsAttributeValuesMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.attributeValuesInput">AttributeValuesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.weightInput">WeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttributeValues`<sup>Required</sup> <a name="AttributeValues" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.attributeValues"></a>

```go
func AttributeValues() AppconfigExperimentDefinitionTreatmentsAttributeValuesMap
```

- *Type:* <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap">AppconfigExperimentDefinitionTreatmentsAttributeValuesMap</a>

---

##### `AttributeValuesInput`<sup>Optional</sup> <a name="AttributeValuesInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.attributeValuesInput"></a>

```go
func AttributeValuesInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.weightInput"></a>

```go
func WeightInput() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



