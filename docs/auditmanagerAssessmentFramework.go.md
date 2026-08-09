# `auditmanagerAssessmentFramework` Submodule <a name="`auditmanagerAssessmentFramework` Submodule" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuditmanagerAssessmentFramework <a name="AuditmanagerAssessmentFramework" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/auditmanager_assessment_framework awscc_auditmanager_assessment_framework}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/auditmanagerassessmentframework"

auditmanagerassessmentframework.NewAuditmanagerAssessmentFramework(scope Construct, id *string, config AuditmanagerAssessmentFrameworkConfig) AuditmanagerAssessmentFramework
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig">AuditmanagerAssessmentFrameworkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig">AuditmanagerAssessmentFrameworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.putControlSets">PutControlSets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.resetComplianceType">ResetComplianceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutControlSets` <a name="PutControlSets" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.putControlSets"></a>

```go
func PutControlSets(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.putControlSets.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetComplianceType` <a name="ResetComplianceType" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.resetComplianceType"></a>

```go
func ResetComplianceType()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AuditmanagerAssessmentFramework resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/auditmanagerassessmentframework"

auditmanagerassessmentframework.AuditmanagerAssessmentFramework_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/auditmanagerassessmentframework"

auditmanagerassessmentframework.AuditmanagerAssessmentFramework_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/auditmanagerassessmentframework"

auditmanagerassessmentframework.AuditmanagerAssessmentFramework_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/auditmanagerassessmentframework"

auditmanagerassessmentframework.AuditmanagerAssessmentFramework_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a AuditmanagerAssessmentFramework resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AuditmanagerAssessmentFramework to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AuditmanagerAssessmentFramework that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/auditmanager_assessment_framework#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the AuditmanagerAssessmentFramework to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.controlSets">ControlSets</a></code> | <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList">AuditmanagerAssessmentFrameworkControlSetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.frameworkId">FrameworkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.lastUpdatedAt">LastUpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.lastUpdatedBy">LastUpdatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList">AuditmanagerAssessmentFrameworkTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.complianceTypeInput">ComplianceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.controlSetsInput">ControlSetsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.complianceType">ComplianceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `ControlSets`<sup>Required</sup> <a name="ControlSets" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.controlSets"></a>

```go
func ControlSets() AuditmanagerAssessmentFrameworkControlSetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList">AuditmanagerAssessmentFrameworkControlSetsList</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `FrameworkId`<sup>Required</sup> <a name="FrameworkId" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.frameworkId"></a>

```go
func FrameworkId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastUpdatedAt`<sup>Required</sup> <a name="LastUpdatedAt" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.lastUpdatedAt"></a>

```go
func LastUpdatedAt() *string
```

- *Type:* *string

---

##### `LastUpdatedBy`<sup>Required</sup> <a name="LastUpdatedBy" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.lastUpdatedBy"></a>

```go
func LastUpdatedBy() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.tags"></a>

```go
func Tags() AuditmanagerAssessmentFrameworkTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList">AuditmanagerAssessmentFrameworkTagsList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `ComplianceTypeInput`<sup>Optional</sup> <a name="ComplianceTypeInput" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.complianceTypeInput"></a>

```go
func ComplianceTypeInput() *string
```

- *Type:* *string

---

##### `ControlSetsInput`<sup>Optional</sup> <a name="ControlSetsInput" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.controlSetsInput"></a>

```go
func ControlSetsInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `ComplianceType`<sup>Required</sup> <a name="ComplianceType" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.complianceType"></a>

```go
func ComplianceType() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AuditmanagerAssessmentFrameworkConfig <a name="AuditmanagerAssessmentFrameworkConfig" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/auditmanagerassessmentframework"

&auditmanagerassessmentframework.AuditmanagerAssessmentFrameworkConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ControlSets: interface{},
	Name: *string,
	ComplianceType: *string,
	Description: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.controlSets">ControlSets</a></code> | <code>interface{}</code> | The control sets that are associated with the framework. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.name">Name</a></code> | <code>*string</code> | The name of the framework. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.complianceType">ComplianceType</a></code> | <code>*string</code> | The compliance type that the framework supports, such as CIS or HIPAA. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.description">Description</a></code> | <code>*string</code> | The description of the framework. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The tags associated with the framework. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ControlSets`<sup>Required</sup> <a name="ControlSets" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.controlSets"></a>

```go
ControlSets interface{}
```

- *Type:* interface{}

The control sets that are associated with the framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/auditmanager_assessment_framework#control_sets AuditmanagerAssessmentFramework#control_sets}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/auditmanager_assessment_framework#name AuditmanagerAssessmentFramework#name}

---

##### `ComplianceType`<sup>Optional</sup> <a name="ComplianceType" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.complianceType"></a>

```go
ComplianceType *string
```

- *Type:* *string

The compliance type that the framework supports, such as CIS or HIPAA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/auditmanager_assessment_framework#compliance_type AuditmanagerAssessmentFramework#compliance_type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/auditmanager_assessment_framework#description AuditmanagerAssessmentFramework#description}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The tags associated with the framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/auditmanager_assessment_framework#tags AuditmanagerAssessmentFramework#tags}

---

### AuditmanagerAssessmentFrameworkControlSets <a name="AuditmanagerAssessmentFrameworkControlSets" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/auditmanagerassessmentframework"

&auditmanagerassessmentframework.AuditmanagerAssessmentFrameworkControlSets {
	Controls: interface{},
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets.property.controls">Controls</a></code> | <code>interface{}</code> | The list of controls within the control set. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets.property.name">Name</a></code> | <code>*string</code> | The name of the control set. |

---

##### `Controls`<sup>Required</sup> <a name="Controls" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets.property.controls"></a>

```go
Controls interface{}
```

- *Type:* interface{}

The list of controls within the control set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/auditmanager_assessment_framework#controls AuditmanagerAssessmentFramework#controls}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the control set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/auditmanager_assessment_framework#name AuditmanagerAssessmentFramework#name}

---

### AuditmanagerAssessmentFrameworkControlSetsControls <a name="AuditmanagerAssessmentFrameworkControlSetsControls" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControls.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/auditmanagerassessmentframework"

&auditmanagerassessmentframework.AuditmanagerAssessmentFrameworkControlSetsControls {
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControls.property.id">Id</a></code> | <code>*string</code> | The unique identifier of the control. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControls.property.id"></a>

```go
Id *string
```

- *Type:* *string

The unique identifier of the control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/auditmanager_assessment_framework#id AuditmanagerAssessmentFramework#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### AuditmanagerAssessmentFrameworkTags <a name="AuditmanagerAssessmentFrameworkTags" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/auditmanagerassessmentframework"

&auditmanagerassessmentframework.AuditmanagerAssessmentFrameworkTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/auditmanager_assessment_framework#key AuditmanagerAssessmentFramework#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/auditmanager_assessment_framework#value AuditmanagerAssessmentFramework#value}

---

## Classes <a name="Classes" id="Classes"></a>

### AuditmanagerAssessmentFrameworkControlSetsControlsList <a name="AuditmanagerAssessmentFrameworkControlSetsControlsList" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/auditmanagerassessmentframework"

auditmanagerassessmentframework.NewAuditmanagerAssessmentFrameworkControlSetsControlsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AuditmanagerAssessmentFrameworkControlSetsControlsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.get"></a>

```go
func Get(index *f64) AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference <a name="AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/auditmanagerassessmentframework"

auditmanagerassessmentframework.NewAuditmanagerAssessmentFrameworkControlSetsControlsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AuditmanagerAssessmentFrameworkControlSetsList <a name="AuditmanagerAssessmentFrameworkControlSetsList" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/auditmanagerassessmentframework"

auditmanagerassessmentframework.NewAuditmanagerAssessmentFrameworkControlSetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AuditmanagerAssessmentFrameworkControlSetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.get"></a>

```go
func Get(index *f64) AuditmanagerAssessmentFrameworkControlSetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AuditmanagerAssessmentFrameworkControlSetsOutputReference <a name="AuditmanagerAssessmentFrameworkControlSetsOutputReference" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/auditmanagerassessmentframework"

auditmanagerassessmentframework.NewAuditmanagerAssessmentFrameworkControlSetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AuditmanagerAssessmentFrameworkControlSetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.putControls">PutControls</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutControls` <a name="PutControls" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.putControls"></a>

```go
func PutControls(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.putControls.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.controls">Controls</a></code> | <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList">AuditmanagerAssessmentFrameworkControlSetsControlsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.controlsInput">ControlsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Controls`<sup>Required</sup> <a name="Controls" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.controls"></a>

```go
func Controls() AuditmanagerAssessmentFrameworkControlSetsControlsList
```

- *Type:* <a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList">AuditmanagerAssessmentFrameworkControlSetsControlsList</a>

---

##### `ControlsInput`<sup>Optional</sup> <a name="ControlsInput" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.controlsInput"></a>

```go
func ControlsInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AuditmanagerAssessmentFrameworkTagsList <a name="AuditmanagerAssessmentFrameworkTagsList" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/auditmanagerassessmentframework"

auditmanagerassessmentframework.NewAuditmanagerAssessmentFrameworkTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AuditmanagerAssessmentFrameworkTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.get"></a>

```go
func Get(index *f64) AuditmanagerAssessmentFrameworkTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AuditmanagerAssessmentFrameworkTagsOutputReference <a name="AuditmanagerAssessmentFrameworkTagsOutputReference" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/auditmanagerassessmentframework"

auditmanagerassessmentframework.NewAuditmanagerAssessmentFrameworkTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AuditmanagerAssessmentFrameworkTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



