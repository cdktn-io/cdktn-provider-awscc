# `ec2NetworkInsightsAccessScopeAnalysis` Submodule <a name="`ec2NetworkInsightsAccessScopeAnalysis` Submodule" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2NetworkInsightsAccessScopeAnalysis <a name="Ec2NetworkInsightsAccessScopeAnalysis" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope_analysis awscc_ec2_network_insights_access_scope_analysis}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2networkinsightsaccessscopeanalysis"

ec2networkinsightsaccessscopeanalysis.NewEc2NetworkInsightsAccessScopeAnalysis(scope Construct, id *string, config Ec2NetworkInsightsAccessScopeAnalysisConfig) Ec2NetworkInsightsAccessScopeAnalysis
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisConfig">Ec2NetworkInsightsAccessScopeAnalysisConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisConfig">Ec2NetworkInsightsAccessScopeAnalysisConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2NetworkInsightsAccessScopeAnalysis resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2networkinsightsaccessscopeanalysis"

ec2networkinsightsaccessscopeanalysis.Ec2NetworkInsightsAccessScopeAnalysis_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2networkinsightsaccessscopeanalysis"

ec2networkinsightsaccessscopeanalysis.Ec2NetworkInsightsAccessScopeAnalysis_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2networkinsightsaccessscopeanalysis"

ec2networkinsightsaccessscopeanalysis.Ec2NetworkInsightsAccessScopeAnalysis_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2networkinsightsaccessscopeanalysis"

ec2networkinsightsaccessscopeanalysis.Ec2NetworkInsightsAccessScopeAnalysis_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Ec2NetworkInsightsAccessScopeAnalysis resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Ec2NetworkInsightsAccessScopeAnalysis to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Ec2NetworkInsightsAccessScopeAnalysis that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope_analysis#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Ec2NetworkInsightsAccessScopeAnalysis to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.analyzedEniCount">AnalyzedEniCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.endDate">EndDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.findingsFound">FindingsFound</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.networkInsightsAccessScopeAnalysisArn">NetworkInsightsAccessScopeAnalysisArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.networkInsightsAccessScopeAnalysisId">NetworkInsightsAccessScopeAnalysisId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.startDate">StartDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.statusMessage">StatusMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList">Ec2NetworkInsightsAccessScopeAnalysisTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.networkInsightsAccessScopeIdInput">NetworkInsightsAccessScopeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.networkInsightsAccessScopeId">NetworkInsightsAccessScopeId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AnalyzedEniCount`<sup>Required</sup> <a name="AnalyzedEniCount" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.analyzedEniCount"></a>

```go
func AnalyzedEniCount() *f64
```

- *Type:* *f64

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.endDate"></a>

```go
func EndDate() *string
```

- *Type:* *string

---

##### `FindingsFound`<sup>Required</sup> <a name="FindingsFound" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.findingsFound"></a>

```go
func FindingsFound() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NetworkInsightsAccessScopeAnalysisArn`<sup>Required</sup> <a name="NetworkInsightsAccessScopeAnalysisArn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.networkInsightsAccessScopeAnalysisArn"></a>

```go
func NetworkInsightsAccessScopeAnalysisArn() *string
```

- *Type:* *string

---

##### `NetworkInsightsAccessScopeAnalysisId`<sup>Required</sup> <a name="NetworkInsightsAccessScopeAnalysisId" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.networkInsightsAccessScopeAnalysisId"></a>

```go
func NetworkInsightsAccessScopeAnalysisId() *string
```

- *Type:* *string

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.startDate"></a>

```go
func StartDate() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StatusMessage`<sup>Required</sup> <a name="StatusMessage" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.statusMessage"></a>

```go
func StatusMessage() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.tags"></a>

```go
func Tags() Ec2NetworkInsightsAccessScopeAnalysisTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList">Ec2NetworkInsightsAccessScopeAnalysisTagsList</a>

---

##### `NetworkInsightsAccessScopeIdInput`<sup>Optional</sup> <a name="NetworkInsightsAccessScopeIdInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.networkInsightsAccessScopeIdInput"></a>

```go
func NetworkInsightsAccessScopeIdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `NetworkInsightsAccessScopeId`<sup>Required</sup> <a name="NetworkInsightsAccessScopeId" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.networkInsightsAccessScopeId"></a>

```go
func NetworkInsightsAccessScopeId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysis.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2NetworkInsightsAccessScopeAnalysisConfig <a name="Ec2NetworkInsightsAccessScopeAnalysisConfig" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2networkinsightsaccessscopeanalysis"

&ec2networkinsightsaccessscopeanalysis.Ec2NetworkInsightsAccessScopeAnalysisConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	NetworkInsightsAccessScopeId: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisConfig.property.networkInsightsAccessScopeId">NetworkInsightsAccessScopeId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope_analysis#network_insights_access_scope_id Ec2NetworkInsightsAccessScopeAnalysis#network_insights_access_scope_id}. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope_analysis#tags Ec2NetworkInsightsAccessScopeAnalysis#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `NetworkInsightsAccessScopeId`<sup>Required</sup> <a name="NetworkInsightsAccessScopeId" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisConfig.property.networkInsightsAccessScopeId"></a>

```go
NetworkInsightsAccessScopeId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope_analysis#network_insights_access_scope_id Ec2NetworkInsightsAccessScopeAnalysis#network_insights_access_scope_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope_analysis#tags Ec2NetworkInsightsAccessScopeAnalysis#tags}.

---

### Ec2NetworkInsightsAccessScopeAnalysisTags <a name="Ec2NetworkInsightsAccessScopeAnalysisTags" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2networkinsightsaccessscopeanalysis"

&ec2networkinsightsaccessscopeanalysis.Ec2NetworkInsightsAccessScopeAnalysisTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope_analysis#key Ec2NetworkInsightsAccessScopeAnalysis#key}. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope_analysis#value Ec2NetworkInsightsAccessScopeAnalysis#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope_analysis#key Ec2NetworkInsightsAccessScopeAnalysis#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope_analysis#value Ec2NetworkInsightsAccessScopeAnalysis#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2NetworkInsightsAccessScopeAnalysisTagsList <a name="Ec2NetworkInsightsAccessScopeAnalysisTagsList" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2networkinsightsaccessscopeanalysis"

ec2networkinsightsaccessscopeanalysis.NewEc2NetworkInsightsAccessScopeAnalysisTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Ec2NetworkInsightsAccessScopeAnalysisTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.get"></a>

```go
func Get(index *f64) Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference <a name="Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2networkinsightsaccessscopeanalysis"

ec2networkinsightsaccessscopeanalysis.NewEc2NetworkInsightsAccessScopeAnalysisTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScopeAnalysis.Ec2NetworkInsightsAccessScopeAnalysisTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



