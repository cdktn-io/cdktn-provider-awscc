# `ec2NetworkInsightsAccessScope` Submodule <a name="`ec2NetworkInsightsAccessScope` Submodule" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2NetworkInsightsAccessScope <a name="Ec2NetworkInsightsAccessScope" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope awscc_ec2_network_insights_access_scope}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2networkinsightsaccessscope"

ec2networkinsightsaccessscope.NewEc2NetworkInsightsAccessScope(scope Construct, id *string, config Ec2NetworkInsightsAccessScopeConfig) Ec2NetworkInsightsAccessScope
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig">Ec2NetworkInsightsAccessScopeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig">Ec2NetworkInsightsAccessScopeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.putExcludePaths">PutExcludePaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.putMatchPaths">PutMatchPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.resetExcludePaths">ResetExcludePaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.resetMatchPaths">ResetMatchPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutExcludePaths` <a name="PutExcludePaths" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.putExcludePaths"></a>

```go
func PutExcludePaths(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.putExcludePaths.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMatchPaths` <a name="PutMatchPaths" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.putMatchPaths"></a>

```go
func PutMatchPaths(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.putMatchPaths.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetExcludePaths` <a name="ResetExcludePaths" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.resetExcludePaths"></a>

```go
func ResetExcludePaths()
```

##### `ResetMatchPaths` <a name="ResetMatchPaths" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.resetMatchPaths"></a>

```go
func ResetMatchPaths()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2NetworkInsightsAccessScope resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2networkinsightsaccessscope"

ec2networkinsightsaccessscope.Ec2NetworkInsightsAccessScope_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2networkinsightsaccessscope"

ec2networkinsightsaccessscope.Ec2NetworkInsightsAccessScope_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2networkinsightsaccessscope"

ec2networkinsightsaccessscope.Ec2NetworkInsightsAccessScope_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2networkinsightsaccessscope"

ec2networkinsightsaccessscope.Ec2NetworkInsightsAccessScope_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Ec2NetworkInsightsAccessScope resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Ec2NetworkInsightsAccessScope to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Ec2NetworkInsightsAccessScope that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Ec2NetworkInsightsAccessScope to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.createdDate">CreatedDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.excludePaths">ExcludePaths</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList">Ec2NetworkInsightsAccessScopeExcludePathsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.matchPaths">MatchPaths</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList">Ec2NetworkInsightsAccessScopeMatchPathsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.networkInsightsAccessScopeArn">NetworkInsightsAccessScopeArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.networkInsightsAccessScopeId">NetworkInsightsAccessScopeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsList">Ec2NetworkInsightsAccessScopeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.updatedDate">UpdatedDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.excludePathsInput">ExcludePathsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.matchPathsInput">MatchPathsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedDate`<sup>Required</sup> <a name="CreatedDate" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.createdDate"></a>

```go
func CreatedDate() *string
```

- *Type:* *string

---

##### `ExcludePaths`<sup>Required</sup> <a name="ExcludePaths" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.excludePaths"></a>

```go
func ExcludePaths() Ec2NetworkInsightsAccessScopeExcludePathsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList">Ec2NetworkInsightsAccessScopeExcludePathsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MatchPaths`<sup>Required</sup> <a name="MatchPaths" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.matchPaths"></a>

```go
func MatchPaths() Ec2NetworkInsightsAccessScopeMatchPathsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList">Ec2NetworkInsightsAccessScopeMatchPathsList</a>

---

##### `NetworkInsightsAccessScopeArn`<sup>Required</sup> <a name="NetworkInsightsAccessScopeArn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.networkInsightsAccessScopeArn"></a>

```go
func NetworkInsightsAccessScopeArn() *string
```

- *Type:* *string

---

##### `NetworkInsightsAccessScopeId`<sup>Required</sup> <a name="NetworkInsightsAccessScopeId" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.networkInsightsAccessScopeId"></a>

```go
func NetworkInsightsAccessScopeId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.tags"></a>

```go
func Tags() Ec2NetworkInsightsAccessScopeTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsList">Ec2NetworkInsightsAccessScopeTagsList</a>

---

##### `UpdatedDate`<sup>Required</sup> <a name="UpdatedDate" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.updatedDate"></a>

```go
func UpdatedDate() *string
```

- *Type:* *string

---

##### `ExcludePathsInput`<sup>Optional</sup> <a name="ExcludePathsInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.excludePathsInput"></a>

```go
func ExcludePathsInput() interface{}
```

- *Type:* interface{}

---

##### `MatchPathsInput`<sup>Optional</sup> <a name="MatchPathsInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.matchPathsInput"></a>

```go
func MatchPathsInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScope.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2NetworkInsightsAccessScopeConfig <a name="Ec2NetworkInsightsAccessScopeConfig" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2networkinsightsaccessscope"

&ec2networkinsightsaccessscope.Ec2NetworkInsightsAccessScopeConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ExcludePaths: interface{},
	MatchPaths: interface{},
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig.property.excludePaths">ExcludePaths</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#exclude_paths Ec2NetworkInsightsAccessScope#exclude_paths}. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig.property.matchPaths">MatchPaths</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#match_paths Ec2NetworkInsightsAccessScope#match_paths}. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#tags Ec2NetworkInsightsAccessScope#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ExcludePaths`<sup>Optional</sup> <a name="ExcludePaths" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig.property.excludePaths"></a>

```go
ExcludePaths interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#exclude_paths Ec2NetworkInsightsAccessScope#exclude_paths}.

---

##### `MatchPaths`<sup>Optional</sup> <a name="MatchPaths" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig.property.matchPaths"></a>

```go
MatchPaths interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#match_paths Ec2NetworkInsightsAccessScope#match_paths}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#tags Ec2NetworkInsightsAccessScope#tags}.

---

### Ec2NetworkInsightsAccessScopeExcludePaths <a name="Ec2NetworkInsightsAccessScopeExcludePaths" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePaths"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePaths.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2networkinsightsaccessscope"

&ec2networkinsightsaccessscope.Ec2NetworkInsightsAccessScopeExcludePaths {
	Destination: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestination,
	Source: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSource,
	ThroughResources: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePaths.property.destination">Destination</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestination">Ec2NetworkInsightsAccessScopeExcludePathsDestination</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#destination Ec2NetworkInsightsAccessScope#destination}. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePaths.property.source">Source</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSource">Ec2NetworkInsightsAccessScopeExcludePathsSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#source Ec2NetworkInsightsAccessScope#source}. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePaths.property.throughResources">ThroughResources</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#through_resources Ec2NetworkInsightsAccessScope#through_resources}. |

---

##### `Destination`<sup>Optional</sup> <a name="Destination" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePaths.property.destination"></a>

```go
Destination Ec2NetworkInsightsAccessScopeExcludePathsDestination
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestination">Ec2NetworkInsightsAccessScopeExcludePathsDestination</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#destination Ec2NetworkInsightsAccessScope#destination}.

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePaths.property.source"></a>

```go
Source Ec2NetworkInsightsAccessScopeExcludePathsSource
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSource">Ec2NetworkInsightsAccessScopeExcludePathsSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#source Ec2NetworkInsightsAccessScope#source}.

---

##### `ThroughResources`<sup>Optional</sup> <a name="ThroughResources" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePaths.property.throughResources"></a>

```go
ThroughResources interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#through_resources Ec2NetworkInsightsAccessScope#through_resources}.

---

### Ec2NetworkInsightsAccessScopeExcludePathsDestination <a name="Ec2NetworkInsightsAccessScopeExcludePathsDestination" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestination.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2networkinsightsaccessscope"

&ec2networkinsightsaccessscope.Ec2NetworkInsightsAccessScopeExcludePathsDestination {
	PacketHeaderStatement: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement,
	ResourceStatement: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestination.property.packetHeaderStatement">PacketHeaderStatement</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement">Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#packet_header_statement Ec2NetworkInsightsAccessScope#packet_header_statement}. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestination.property.resourceStatement">ResourceStatement</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement">Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#resource_statement Ec2NetworkInsightsAccessScope#resource_statement}. |

---

##### `PacketHeaderStatement`<sup>Optional</sup> <a name="PacketHeaderStatement" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestination.property.packetHeaderStatement"></a>

```go
PacketHeaderStatement Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement">Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#packet_header_statement Ec2NetworkInsightsAccessScope#packet_header_statement}.

---

##### `ResourceStatement`<sup>Optional</sup> <a name="ResourceStatement" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestination.property.resourceStatement"></a>

```go
ResourceStatement Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement">Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#resource_statement Ec2NetworkInsightsAccessScope#resource_statement}.

---

### Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement <a name="Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2networkinsightsaccessscope"

&ec2networkinsightsaccessscope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement {
	DestinationAddresses: *[]*string,
	DestinationPorts: *[]*string,
	DestinationPrefixLists: *[]*string,
	Protocols: *[]*string,
	SourceAddresses: *[]*string,
	SourcePorts: *[]*string,
	SourcePrefixLists: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement.property.destinationAddresses">DestinationAddresses</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#destination_addresses Ec2NetworkInsightsAccessScope#destination_addresses}. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement.property.destinationPorts">DestinationPorts</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#destination_ports Ec2NetworkInsightsAccessScope#destination_ports}. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement.property.destinationPrefixLists">DestinationPrefixLists</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#destination_prefix_lists Ec2NetworkInsightsAccessScope#destination_prefix_lists}. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement.property.protocols">Protocols</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#protocols Ec2NetworkInsightsAccessScope#protocols}. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement.property.sourceAddresses">SourceAddresses</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#source_addresses Ec2NetworkInsightsAccessScope#source_addresses}. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement.property.sourcePorts">SourcePorts</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#source_ports Ec2NetworkInsightsAccessScope#source_ports}. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement.property.sourcePrefixLists">SourcePrefixLists</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#source_prefix_lists Ec2NetworkInsightsAccessScope#source_prefix_lists}. |

---

##### `DestinationAddresses`<sup>Optional</sup> <a name="DestinationAddresses" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement.property.destinationAddresses"></a>

```go
DestinationAddresses *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#destination_addresses Ec2NetworkInsightsAccessScope#destination_addresses}.

---

##### `DestinationPorts`<sup>Optional</sup> <a name="DestinationPorts" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement.property.destinationPorts"></a>

```go
DestinationPorts *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#destination_ports Ec2NetworkInsightsAccessScope#destination_ports}.

---

##### `DestinationPrefixLists`<sup>Optional</sup> <a name="DestinationPrefixLists" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement.property.destinationPrefixLists"></a>

```go
DestinationPrefixLists *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#destination_prefix_lists Ec2NetworkInsightsAccessScope#destination_prefix_lists}.

---

##### `Protocols`<sup>Optional</sup> <a name="Protocols" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement.property.protocols"></a>

```go
Protocols *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#protocols Ec2NetworkInsightsAccessScope#protocols}.

---

##### `SourceAddresses`<sup>Optional</sup> <a name="SourceAddresses" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement.property.sourceAddresses"></a>

```go
SourceAddresses *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#source_addresses Ec2NetworkInsightsAccessScope#source_addresses}.

---

##### `SourcePorts`<sup>Optional</sup> <a name="SourcePorts" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement.property.sourcePorts"></a>

```go
SourcePorts *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#source_ports Ec2NetworkInsightsAccessScope#source_ports}.

---

##### `SourcePrefixLists`<sup>Optional</sup> <a name="SourcePrefixLists" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement.property.sourcePrefixLists"></a>

```go
SourcePrefixLists *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#source_prefix_lists Ec2NetworkInsightsAccessScope#source_prefix_lists}.

---

### Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement <a name="Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2networkinsightsaccessscope"

&ec2networkinsightsaccessscope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement {
	Resources: *[]*string,
	ResourceTypes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement.property.resources">Resources</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#resources Ec2NetworkInsightsAccessScope#resources}. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement.property.resourceTypes">ResourceTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#resource_types Ec2NetworkInsightsAccessScope#resource_types}. |

---

##### `Resources`<sup>Optional</sup> <a name="Resources" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement.property.resources"></a>

```go
Resources *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#resources Ec2NetworkInsightsAccessScope#resources}.

---

##### `ResourceTypes`<sup>Optional</sup> <a name="ResourceTypes" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement.property.resourceTypes"></a>

```go
ResourceTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#resource_types Ec2NetworkInsightsAccessScope#resource_types}.

---

### Ec2NetworkInsightsAccessScopeExcludePathsSource <a name="Ec2NetworkInsightsAccessScopeExcludePathsSource" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2networkinsightsaccessscope"

&ec2networkinsightsaccessscope.Ec2NetworkInsightsAccessScopeExcludePathsSource {
	PacketHeaderStatement: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement,
	ResourceStatement: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSource.property.packetHeaderStatement">PacketHeaderStatement</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement">Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#packet_header_statement Ec2NetworkInsightsAccessScope#packet_header_statement}. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSource.property.resourceStatement">ResourceStatement</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement">Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#resource_statement Ec2NetworkInsightsAccessScope#resource_statement}. |

---

##### `PacketHeaderStatement`<sup>Optional</sup> <a name="PacketHeaderStatement" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSource.property.packetHeaderStatement"></a>

```go
PacketHeaderStatement Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement">Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#packet_header_statement Ec2NetworkInsightsAccessScope#packet_header_statement}.

---

##### `ResourceStatement`<sup>Optional</sup> <a name="ResourceStatement" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSource.property.resourceStatement"></a>

```go
ResourceStatement Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement">Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#resource_statement Ec2NetworkInsightsAccessScope#resource_statement}.

---

### Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement <a name="Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2networkinsightsaccessscope"

&ec2networkinsightsaccessscope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement {
	DestinationAddresses: *[]*string,
	DestinationPorts: *[]*string,
	DestinationPrefixLists: *[]*string,
	Protocols: *[]*string,
	SourceAddresses: *[]*string,
	SourcePorts: *[]*string,
	SourcePrefixLists: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement.property.destinationAddresses">DestinationAddresses</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#destination_addresses Ec2NetworkInsightsAccessScope#destination_addresses}. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement.property.destinationPorts">DestinationPorts</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#destination_ports Ec2NetworkInsightsAccessScope#destination_ports}. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement.property.destinationPrefixLists">DestinationPrefixLists</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#destination_prefix_lists Ec2NetworkInsightsAccessScope#destination_prefix_lists}. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement.property.protocols">Protocols</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#protocols Ec2NetworkInsightsAccessScope#protocols}. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement.property.sourceAddresses">SourceAddresses</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#source_addresses Ec2NetworkInsightsAccessScope#source_addresses}. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement.property.sourcePorts">SourcePorts</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#source_ports Ec2NetworkInsightsAccessScope#source_ports}. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement.property.sourcePrefixLists">SourcePrefixLists</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#source_prefix_lists Ec2NetworkInsightsAccessScope#source_prefix_lists}. |

---

##### `DestinationAddresses`<sup>Optional</sup> <a name="DestinationAddresses" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement.property.destinationAddresses"></a>

```go
DestinationAddresses *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#destination_addresses Ec2NetworkInsightsAccessScope#destination_addresses}.

---

##### `DestinationPorts`<sup>Optional</sup> <a name="DestinationPorts" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement.property.destinationPorts"></a>

```go
DestinationPorts *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#destination_ports Ec2NetworkInsightsAccessScope#destination_ports}.

---

##### `DestinationPrefixLists`<sup>Optional</sup> <a name="DestinationPrefixLists" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement.property.destinationPrefixLists"></a>

```go
DestinationPrefixLists *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#destination_prefix_lists Ec2NetworkInsightsAccessScope#destination_prefix_lists}.

---

##### `Protocols`<sup>Optional</sup> <a name="Protocols" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement.property.protocols"></a>

```go
Protocols *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#protocols Ec2NetworkInsightsAccessScope#protocols}.

---

##### `SourceAddresses`<sup>Optional</sup> <a name="SourceAddresses" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement.property.sourceAddresses"></a>

```go
SourceAddresses *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#source_addresses Ec2NetworkInsightsAccessScope#source_addresses}.

---

##### `SourcePorts`<sup>Optional</sup> <a name="SourcePorts" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement.property.sourcePorts"></a>

```go
SourcePorts *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#source_ports Ec2NetworkInsightsAccessScope#source_ports}.

---

##### `SourcePrefixLists`<sup>Optional</sup> <a name="SourcePrefixLists" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement.property.sourcePrefixLists"></a>

```go
SourcePrefixLists *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#source_prefix_lists Ec2NetworkInsightsAccessScope#source_prefix_lists}.

---

### Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement <a name="Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2networkinsightsaccessscope"

&ec2networkinsightsaccessscope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement {
	Resources: *[]*string,
	ResourceTypes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement.property.resources">Resources</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#resources Ec2NetworkInsightsAccessScope#resources}. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement.property.resourceTypes">ResourceTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#resource_types Ec2NetworkInsightsAccessScope#resource_types}. |

---

##### `Resources`<sup>Optional</sup> <a name="Resources" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement.property.resources"></a>

```go
Resources *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#resources Ec2NetworkInsightsAccessScope#resources}.

---

##### `ResourceTypes`<sup>Optional</sup> <a name="ResourceTypes" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement.property.resourceTypes"></a>

```go
ResourceTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#resource_types Ec2NetworkInsightsAccessScope#resource_types}.

---

### Ec2NetworkInsightsAccessScopeExcludePathsThroughResources <a name="Ec2NetworkInsightsAccessScopeExcludePathsThroughResources" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResources.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2networkinsightsaccessscope"

&ec2networkinsightsaccessscope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResources {
	ResourceStatement: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResources.property.resourceStatement">ResourceStatement</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement">Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#resource_statement Ec2NetworkInsightsAccessScope#resource_statement}. |

---

##### `ResourceStatement`<sup>Optional</sup> <a name="ResourceStatement" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResources.property.resourceStatement"></a>

```go
ResourceStatement Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement">Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#resource_statement Ec2NetworkInsightsAccessScope#resource_statement}.

---

### Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement <a name="Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2networkinsightsaccessscope"

&ec2networkinsightsaccessscope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement {
	Resources: *[]*string,
	ResourceTypes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement.property.resources">Resources</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#resources Ec2NetworkInsightsAccessScope#resources}. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement.property.resourceTypes">ResourceTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#resource_types Ec2NetworkInsightsAccessScope#resource_types}. |

---

##### `Resources`<sup>Optional</sup> <a name="Resources" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement.property.resources"></a>

```go
Resources *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#resources Ec2NetworkInsightsAccessScope#resources}.

---

##### `ResourceTypes`<sup>Optional</sup> <a name="ResourceTypes" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement.property.resourceTypes"></a>

```go
ResourceTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#resource_types Ec2NetworkInsightsAccessScope#resource_types}.

---

### Ec2NetworkInsightsAccessScopeMatchPaths <a name="Ec2NetworkInsightsAccessScopeMatchPaths" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPaths"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPaths.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2networkinsightsaccessscope"

&ec2networkinsightsaccessscope.Ec2NetworkInsightsAccessScopeMatchPaths {
	Destination: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestination,
	Source: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSource,
	ThroughResources: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPaths.property.destination">Destination</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestination">Ec2NetworkInsightsAccessScopeMatchPathsDestination</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#destination Ec2NetworkInsightsAccessScope#destination}. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPaths.property.source">Source</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSource">Ec2NetworkInsightsAccessScopeMatchPathsSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#source Ec2NetworkInsightsAccessScope#source}. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPaths.property.throughResources">ThroughResources</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#through_resources Ec2NetworkInsightsAccessScope#through_resources}. |

---

##### `Destination`<sup>Optional</sup> <a name="Destination" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPaths.property.destination"></a>

```go
Destination Ec2NetworkInsightsAccessScopeMatchPathsDestination
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestination">Ec2NetworkInsightsAccessScopeMatchPathsDestination</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#destination Ec2NetworkInsightsAccessScope#destination}.

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPaths.property.source"></a>

```go
Source Ec2NetworkInsightsAccessScopeMatchPathsSource
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSource">Ec2NetworkInsightsAccessScopeMatchPathsSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#source Ec2NetworkInsightsAccessScope#source}.

---

##### `ThroughResources`<sup>Optional</sup> <a name="ThroughResources" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPaths.property.throughResources"></a>

```go
ThroughResources interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#through_resources Ec2NetworkInsightsAccessScope#through_resources}.

---

### Ec2NetworkInsightsAccessScopeMatchPathsDestination <a name="Ec2NetworkInsightsAccessScopeMatchPathsDestination" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestination.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2networkinsightsaccessscope"

&ec2networkinsightsaccessscope.Ec2NetworkInsightsAccessScopeMatchPathsDestination {
	PacketHeaderStatement: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement,
	ResourceStatement: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestination.property.packetHeaderStatement">PacketHeaderStatement</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement">Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#packet_header_statement Ec2NetworkInsightsAccessScope#packet_header_statement}. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestination.property.resourceStatement">ResourceStatement</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement">Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#resource_statement Ec2NetworkInsightsAccessScope#resource_statement}. |

---

##### `PacketHeaderStatement`<sup>Optional</sup> <a name="PacketHeaderStatement" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestination.property.packetHeaderStatement"></a>

```go
PacketHeaderStatement Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement">Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#packet_header_statement Ec2NetworkInsightsAccessScope#packet_header_statement}.

---

##### `ResourceStatement`<sup>Optional</sup> <a name="ResourceStatement" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestination.property.resourceStatement"></a>

```go
ResourceStatement Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement">Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#resource_statement Ec2NetworkInsightsAccessScope#resource_statement}.

---

### Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement <a name="Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2networkinsightsaccessscope"

&ec2networkinsightsaccessscope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement {
	DestinationAddresses: *[]*string,
	DestinationPorts: *[]*string,
	DestinationPrefixLists: *[]*string,
	Protocols: *[]*string,
	SourceAddresses: *[]*string,
	SourcePorts: *[]*string,
	SourcePrefixLists: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement.property.destinationAddresses">DestinationAddresses</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#destination_addresses Ec2NetworkInsightsAccessScope#destination_addresses}. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement.property.destinationPorts">DestinationPorts</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#destination_ports Ec2NetworkInsightsAccessScope#destination_ports}. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement.property.destinationPrefixLists">DestinationPrefixLists</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#destination_prefix_lists Ec2NetworkInsightsAccessScope#destination_prefix_lists}. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement.property.protocols">Protocols</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#protocols Ec2NetworkInsightsAccessScope#protocols}. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement.property.sourceAddresses">SourceAddresses</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#source_addresses Ec2NetworkInsightsAccessScope#source_addresses}. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement.property.sourcePorts">SourcePorts</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#source_ports Ec2NetworkInsightsAccessScope#source_ports}. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement.property.sourcePrefixLists">SourcePrefixLists</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#source_prefix_lists Ec2NetworkInsightsAccessScope#source_prefix_lists}. |

---

##### `DestinationAddresses`<sup>Optional</sup> <a name="DestinationAddresses" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement.property.destinationAddresses"></a>

```go
DestinationAddresses *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#destination_addresses Ec2NetworkInsightsAccessScope#destination_addresses}.

---

##### `DestinationPorts`<sup>Optional</sup> <a name="DestinationPorts" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement.property.destinationPorts"></a>

```go
DestinationPorts *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#destination_ports Ec2NetworkInsightsAccessScope#destination_ports}.

---

##### `DestinationPrefixLists`<sup>Optional</sup> <a name="DestinationPrefixLists" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement.property.destinationPrefixLists"></a>

```go
DestinationPrefixLists *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#destination_prefix_lists Ec2NetworkInsightsAccessScope#destination_prefix_lists}.

---

##### `Protocols`<sup>Optional</sup> <a name="Protocols" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement.property.protocols"></a>

```go
Protocols *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#protocols Ec2NetworkInsightsAccessScope#protocols}.

---

##### `SourceAddresses`<sup>Optional</sup> <a name="SourceAddresses" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement.property.sourceAddresses"></a>

```go
SourceAddresses *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#source_addresses Ec2NetworkInsightsAccessScope#source_addresses}.

---

##### `SourcePorts`<sup>Optional</sup> <a name="SourcePorts" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement.property.sourcePorts"></a>

```go
SourcePorts *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#source_ports Ec2NetworkInsightsAccessScope#source_ports}.

---

##### `SourcePrefixLists`<sup>Optional</sup> <a name="SourcePrefixLists" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement.property.sourcePrefixLists"></a>

```go
SourcePrefixLists *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#source_prefix_lists Ec2NetworkInsightsAccessScope#source_prefix_lists}.

---

### Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement <a name="Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2networkinsightsaccessscope"

&ec2networkinsightsaccessscope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement {
	Resources: *[]*string,
	ResourceTypes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement.property.resources">Resources</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#resources Ec2NetworkInsightsAccessScope#resources}. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement.property.resourceTypes">ResourceTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#resource_types Ec2NetworkInsightsAccessScope#resource_types}. |

---

##### `Resources`<sup>Optional</sup> <a name="Resources" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement.property.resources"></a>

```go
Resources *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#resources Ec2NetworkInsightsAccessScope#resources}.

---

##### `ResourceTypes`<sup>Optional</sup> <a name="ResourceTypes" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement.property.resourceTypes"></a>

```go
ResourceTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#resource_types Ec2NetworkInsightsAccessScope#resource_types}.

---

### Ec2NetworkInsightsAccessScopeMatchPathsSource <a name="Ec2NetworkInsightsAccessScopeMatchPathsSource" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2networkinsightsaccessscope"

&ec2networkinsightsaccessscope.Ec2NetworkInsightsAccessScopeMatchPathsSource {
	PacketHeaderStatement: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement,
	ResourceStatement: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSource.property.packetHeaderStatement">PacketHeaderStatement</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement">Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#packet_header_statement Ec2NetworkInsightsAccessScope#packet_header_statement}. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSource.property.resourceStatement">ResourceStatement</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement">Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#resource_statement Ec2NetworkInsightsAccessScope#resource_statement}. |

---

##### `PacketHeaderStatement`<sup>Optional</sup> <a name="PacketHeaderStatement" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSource.property.packetHeaderStatement"></a>

```go
PacketHeaderStatement Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement">Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#packet_header_statement Ec2NetworkInsightsAccessScope#packet_header_statement}.

---

##### `ResourceStatement`<sup>Optional</sup> <a name="ResourceStatement" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSource.property.resourceStatement"></a>

```go
ResourceStatement Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement">Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#resource_statement Ec2NetworkInsightsAccessScope#resource_statement}.

---

### Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement <a name="Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2networkinsightsaccessscope"

&ec2networkinsightsaccessscope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement {
	DestinationAddresses: *[]*string,
	DestinationPorts: *[]*string,
	DestinationPrefixLists: *[]*string,
	Protocols: *[]*string,
	SourceAddresses: *[]*string,
	SourcePorts: *[]*string,
	SourcePrefixLists: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement.property.destinationAddresses">DestinationAddresses</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#destination_addresses Ec2NetworkInsightsAccessScope#destination_addresses}. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement.property.destinationPorts">DestinationPorts</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#destination_ports Ec2NetworkInsightsAccessScope#destination_ports}. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement.property.destinationPrefixLists">DestinationPrefixLists</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#destination_prefix_lists Ec2NetworkInsightsAccessScope#destination_prefix_lists}. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement.property.protocols">Protocols</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#protocols Ec2NetworkInsightsAccessScope#protocols}. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement.property.sourceAddresses">SourceAddresses</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#source_addresses Ec2NetworkInsightsAccessScope#source_addresses}. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement.property.sourcePorts">SourcePorts</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#source_ports Ec2NetworkInsightsAccessScope#source_ports}. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement.property.sourcePrefixLists">SourcePrefixLists</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#source_prefix_lists Ec2NetworkInsightsAccessScope#source_prefix_lists}. |

---

##### `DestinationAddresses`<sup>Optional</sup> <a name="DestinationAddresses" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement.property.destinationAddresses"></a>

```go
DestinationAddresses *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#destination_addresses Ec2NetworkInsightsAccessScope#destination_addresses}.

---

##### `DestinationPorts`<sup>Optional</sup> <a name="DestinationPorts" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement.property.destinationPorts"></a>

```go
DestinationPorts *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#destination_ports Ec2NetworkInsightsAccessScope#destination_ports}.

---

##### `DestinationPrefixLists`<sup>Optional</sup> <a name="DestinationPrefixLists" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement.property.destinationPrefixLists"></a>

```go
DestinationPrefixLists *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#destination_prefix_lists Ec2NetworkInsightsAccessScope#destination_prefix_lists}.

---

##### `Protocols`<sup>Optional</sup> <a name="Protocols" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement.property.protocols"></a>

```go
Protocols *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#protocols Ec2NetworkInsightsAccessScope#protocols}.

---

##### `SourceAddresses`<sup>Optional</sup> <a name="SourceAddresses" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement.property.sourceAddresses"></a>

```go
SourceAddresses *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#source_addresses Ec2NetworkInsightsAccessScope#source_addresses}.

---

##### `SourcePorts`<sup>Optional</sup> <a name="SourcePorts" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement.property.sourcePorts"></a>

```go
SourcePorts *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#source_ports Ec2NetworkInsightsAccessScope#source_ports}.

---

##### `SourcePrefixLists`<sup>Optional</sup> <a name="SourcePrefixLists" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement.property.sourcePrefixLists"></a>

```go
SourcePrefixLists *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#source_prefix_lists Ec2NetworkInsightsAccessScope#source_prefix_lists}.

---

### Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement <a name="Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2networkinsightsaccessscope"

&ec2networkinsightsaccessscope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement {
	Resources: *[]*string,
	ResourceTypes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement.property.resources">Resources</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#resources Ec2NetworkInsightsAccessScope#resources}. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement.property.resourceTypes">ResourceTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#resource_types Ec2NetworkInsightsAccessScope#resource_types}. |

---

##### `Resources`<sup>Optional</sup> <a name="Resources" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement.property.resources"></a>

```go
Resources *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#resources Ec2NetworkInsightsAccessScope#resources}.

---

##### `ResourceTypes`<sup>Optional</sup> <a name="ResourceTypes" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement.property.resourceTypes"></a>

```go
ResourceTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#resource_types Ec2NetworkInsightsAccessScope#resource_types}.

---

### Ec2NetworkInsightsAccessScopeMatchPathsThroughResources <a name="Ec2NetworkInsightsAccessScopeMatchPathsThroughResources" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResources.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2networkinsightsaccessscope"

&ec2networkinsightsaccessscope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResources {
	ResourceStatement: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatement,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResources.property.resourceStatement">ResourceStatement</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatement">Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatement</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#resource_statement Ec2NetworkInsightsAccessScope#resource_statement}. |

---

##### `ResourceStatement`<sup>Optional</sup> <a name="ResourceStatement" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResources.property.resourceStatement"></a>

```go
ResourceStatement Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatement
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatement">Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatement</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#resource_statement Ec2NetworkInsightsAccessScope#resource_statement}.

---

### Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatement <a name="Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatement" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatement.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2networkinsightsaccessscope"

&ec2networkinsightsaccessscope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatement {
	Resources: *[]*string,
	ResourceTypes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatement.property.resources">Resources</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#resources Ec2NetworkInsightsAccessScope#resources}. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatement.property.resourceTypes">ResourceTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#resource_types Ec2NetworkInsightsAccessScope#resource_types}. |

---

##### `Resources`<sup>Optional</sup> <a name="Resources" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatement.property.resources"></a>

```go
Resources *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#resources Ec2NetworkInsightsAccessScope#resources}.

---

##### `ResourceTypes`<sup>Optional</sup> <a name="ResourceTypes" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatement.property.resourceTypes"></a>

```go
ResourceTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#resource_types Ec2NetworkInsightsAccessScope#resource_types}.

---

### Ec2NetworkInsightsAccessScopeTags <a name="Ec2NetworkInsightsAccessScopeTags" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2networkinsightsaccessscope"

&ec2networkinsightsaccessscope.Ec2NetworkInsightsAccessScopeTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#key Ec2NetworkInsightsAccessScope#key}. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#value Ec2NetworkInsightsAccessScope#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#key Ec2NetworkInsightsAccessScope#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_network_insights_access_scope#value Ec2NetworkInsightsAccessScope#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference <a name="Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2networkinsightsaccessscope"

ec2networkinsightsaccessscope.NewEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.putPacketHeaderStatement">PutPacketHeaderStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.putResourceStatement">PutResourceStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.resetPacketHeaderStatement">ResetPacketHeaderStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.resetResourceStatement">ResetResourceStatement</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPacketHeaderStatement` <a name="PutPacketHeaderStatement" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.putPacketHeaderStatement"></a>

```go
func PutPacketHeaderStatement(value Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.putPacketHeaderStatement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement">Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement</a>

---

##### `PutResourceStatement` <a name="PutResourceStatement" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.putResourceStatement"></a>

```go
func PutResourceStatement(value Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.putResourceStatement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement">Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement</a>

---

##### `ResetPacketHeaderStatement` <a name="ResetPacketHeaderStatement" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.resetPacketHeaderStatement"></a>

```go
func ResetPacketHeaderStatement()
```

##### `ResetResourceStatement` <a name="ResetResourceStatement" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.resetResourceStatement"></a>

```go
func ResetResourceStatement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.property.packetHeaderStatement">PacketHeaderStatement</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference">Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.property.resourceStatement">ResourceStatement</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference">Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.property.packetHeaderStatementInput">PacketHeaderStatementInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.property.resourceStatementInput">ResourceStatementInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PacketHeaderStatement`<sup>Required</sup> <a name="PacketHeaderStatement" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.property.packetHeaderStatement"></a>

```go
func PacketHeaderStatement() Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference">Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference</a>

---

##### `ResourceStatement`<sup>Required</sup> <a name="ResourceStatement" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.property.resourceStatement"></a>

```go
func ResourceStatement() Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference">Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference</a>

---

##### `PacketHeaderStatementInput`<sup>Optional</sup> <a name="PacketHeaderStatementInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.property.packetHeaderStatementInput"></a>

```go
func PacketHeaderStatementInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceStatementInput`<sup>Optional</sup> <a name="ResourceStatementInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.property.resourceStatementInput"></a>

```go
func ResourceStatementInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference <a name="Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2networkinsightsaccessscope"

ec2networkinsightsaccessscope.NewEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.resetDestinationAddresses">ResetDestinationAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.resetDestinationPorts">ResetDestinationPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.resetDestinationPrefixLists">ResetDestinationPrefixLists</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.resetProtocols">ResetProtocols</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.resetSourceAddresses">ResetSourceAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.resetSourcePorts">ResetSourcePorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.resetSourcePrefixLists">ResetSourcePrefixLists</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationAddresses` <a name="ResetDestinationAddresses" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.resetDestinationAddresses"></a>

```go
func ResetDestinationAddresses()
```

##### `ResetDestinationPorts` <a name="ResetDestinationPorts" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.resetDestinationPorts"></a>

```go
func ResetDestinationPorts()
```

##### `ResetDestinationPrefixLists` <a name="ResetDestinationPrefixLists" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.resetDestinationPrefixLists"></a>

```go
func ResetDestinationPrefixLists()
```

##### `ResetProtocols` <a name="ResetProtocols" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.resetProtocols"></a>

```go
func ResetProtocols()
```

##### `ResetSourceAddresses` <a name="ResetSourceAddresses" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.resetSourceAddresses"></a>

```go
func ResetSourceAddresses()
```

##### `ResetSourcePorts` <a name="ResetSourcePorts" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.resetSourcePorts"></a>

```go
func ResetSourcePorts()
```

##### `ResetSourcePrefixLists` <a name="ResetSourcePrefixLists" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.resetSourcePrefixLists"></a>

```go
func ResetSourcePrefixLists()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.destinationAddressesInput">DestinationAddressesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.destinationPortsInput">DestinationPortsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.destinationPrefixListsInput">DestinationPrefixListsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.protocolsInput">ProtocolsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.sourceAddressesInput">SourceAddressesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.sourcePortsInput">SourcePortsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.sourcePrefixListsInput">SourcePrefixListsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.destinationAddresses">DestinationAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.destinationPorts">DestinationPorts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.destinationPrefixLists">DestinationPrefixLists</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.protocols">Protocols</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.sourceAddresses">SourceAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.sourcePorts">SourcePorts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.sourcePrefixLists">SourcePrefixLists</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationAddressesInput`<sup>Optional</sup> <a name="DestinationAddressesInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.destinationAddressesInput"></a>

```go
func DestinationAddressesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DestinationPortsInput`<sup>Optional</sup> <a name="DestinationPortsInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.destinationPortsInput"></a>

```go
func DestinationPortsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DestinationPrefixListsInput`<sup>Optional</sup> <a name="DestinationPrefixListsInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.destinationPrefixListsInput"></a>

```go
func DestinationPrefixListsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ProtocolsInput`<sup>Optional</sup> <a name="ProtocolsInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.protocolsInput"></a>

```go
func ProtocolsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SourceAddressesInput`<sup>Optional</sup> <a name="SourceAddressesInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.sourceAddressesInput"></a>

```go
func SourceAddressesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SourcePortsInput`<sup>Optional</sup> <a name="SourcePortsInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.sourcePortsInput"></a>

```go
func SourcePortsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SourcePrefixListsInput`<sup>Optional</sup> <a name="SourcePrefixListsInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.sourcePrefixListsInput"></a>

```go
func SourcePrefixListsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DestinationAddresses`<sup>Required</sup> <a name="DestinationAddresses" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.destinationAddresses"></a>

```go
func DestinationAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `DestinationPorts`<sup>Required</sup> <a name="DestinationPorts" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.destinationPorts"></a>

```go
func DestinationPorts() *[]*string
```

- *Type:* *[]*string

---

##### `DestinationPrefixLists`<sup>Required</sup> <a name="DestinationPrefixLists" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.destinationPrefixLists"></a>

```go
func DestinationPrefixLists() *[]*string
```

- *Type:* *[]*string

---

##### `Protocols`<sup>Required</sup> <a name="Protocols" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.protocols"></a>

```go
func Protocols() *[]*string
```

- *Type:* *[]*string

---

##### `SourceAddresses`<sup>Required</sup> <a name="SourceAddresses" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.sourceAddresses"></a>

```go
func SourceAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `SourcePorts`<sup>Required</sup> <a name="SourcePorts" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.sourcePorts"></a>

```go
func SourcePorts() *[]*string
```

- *Type:* *[]*string

---

##### `SourcePrefixLists`<sup>Required</sup> <a name="SourcePrefixLists" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.sourcePrefixLists"></a>

```go
func SourcePrefixLists() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference <a name="Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2networkinsightsaccessscope"

ec2networkinsightsaccessscope.NewEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.resetResources">ResetResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.resetResourceTypes">ResetResourceTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResources` <a name="ResetResources" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.resetResources"></a>

```go
func ResetResources()
```

##### `ResetResourceTypes` <a name="ResetResourceTypes" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.resetResourceTypes"></a>

```go
func ResetResourceTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.property.resourceTypesInput">ResourceTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.property.resources">Resources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.property.resourceTypes">ResourceTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.property.resourcesInput"></a>

```go
func ResourcesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceTypesInput`<sup>Optional</sup> <a name="ResourceTypesInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.property.resourceTypesInput"></a>

```go
func ResourceTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.property.resources"></a>

```go
func Resources() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceTypes`<sup>Required</sup> <a name="ResourceTypes" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.property.resourceTypes"></a>

```go
func ResourceTypes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2NetworkInsightsAccessScopeExcludePathsList <a name="Ec2NetworkInsightsAccessScopeExcludePathsList" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2networkinsightsaccessscope"

ec2networkinsightsaccessscope.NewEc2NetworkInsightsAccessScopeExcludePathsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Ec2NetworkInsightsAccessScopeExcludePathsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.get"></a>

```go
func Get(index *f64) Ec2NetworkInsightsAccessScopeExcludePathsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2NetworkInsightsAccessScopeExcludePathsOutputReference <a name="Ec2NetworkInsightsAccessScopeExcludePathsOutputReference" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2networkinsightsaccessscope"

ec2networkinsightsaccessscope.NewEc2NetworkInsightsAccessScopeExcludePathsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Ec2NetworkInsightsAccessScopeExcludePathsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.putDestination">PutDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.putThroughResources">PutThroughResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.resetDestination">ResetDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.resetThroughResources">ResetThroughResources</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestination` <a name="PutDestination" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.putDestination"></a>

```go
func PutDestination(value Ec2NetworkInsightsAccessScopeExcludePathsDestination)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.putDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestination">Ec2NetworkInsightsAccessScopeExcludePathsDestination</a>

---

##### `PutSource` <a name="PutSource" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.putSource"></a>

```go
func PutSource(value Ec2NetworkInsightsAccessScopeExcludePathsSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSource">Ec2NetworkInsightsAccessScopeExcludePathsSource</a>

---

##### `PutThroughResources` <a name="PutThroughResources" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.putThroughResources"></a>

```go
func PutThroughResources(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.putThroughResources.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDestination` <a name="ResetDestination" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.resetDestination"></a>

```go
func ResetDestination()
```

##### `ResetSource` <a name="ResetSource" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.resetSource"></a>

```go
func ResetSource()
```

##### `ResetThroughResources` <a name="ResetThroughResources" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.resetThroughResources"></a>

```go
func ResetThroughResources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.property.destination">Destination</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference">Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.property.source">Source</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference">Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.property.throughResources">ThroughResources</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList">Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.property.destinationInput">DestinationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.property.sourceInput">SourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.property.throughResourcesInput">ThroughResourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.property.destination"></a>

```go
func Destination() Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference">Ec2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.property.source"></a>

```go
func Source() Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference">Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference</a>

---

##### `ThroughResources`<sup>Required</sup> <a name="ThroughResources" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.property.throughResources"></a>

```go
func ThroughResources() Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList">Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList</a>

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.property.destinationInput"></a>

```go
func DestinationInput() interface{}
```

- *Type:* interface{}

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.property.sourceInput"></a>

```go
func SourceInput() interface{}
```

- *Type:* interface{}

---

##### `ThroughResourcesInput`<sup>Optional</sup> <a name="ThroughResourcesInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.property.throughResourcesInput"></a>

```go
func ThroughResourcesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference <a name="Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2networkinsightsaccessscope"

ec2networkinsightsaccessscope.NewEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.putPacketHeaderStatement">PutPacketHeaderStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.putResourceStatement">PutResourceStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.resetPacketHeaderStatement">ResetPacketHeaderStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.resetResourceStatement">ResetResourceStatement</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPacketHeaderStatement` <a name="PutPacketHeaderStatement" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.putPacketHeaderStatement"></a>

```go
func PutPacketHeaderStatement(value Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.putPacketHeaderStatement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement">Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement</a>

---

##### `PutResourceStatement` <a name="PutResourceStatement" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.putResourceStatement"></a>

```go
func PutResourceStatement(value Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.putResourceStatement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement">Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement</a>

---

##### `ResetPacketHeaderStatement` <a name="ResetPacketHeaderStatement" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.resetPacketHeaderStatement"></a>

```go
func ResetPacketHeaderStatement()
```

##### `ResetResourceStatement` <a name="ResetResourceStatement" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.resetResourceStatement"></a>

```go
func ResetResourceStatement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.property.packetHeaderStatement">PacketHeaderStatement</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference">Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.property.resourceStatement">ResourceStatement</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference">Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.property.packetHeaderStatementInput">PacketHeaderStatementInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.property.resourceStatementInput">ResourceStatementInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PacketHeaderStatement`<sup>Required</sup> <a name="PacketHeaderStatement" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.property.packetHeaderStatement"></a>

```go
func PacketHeaderStatement() Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference">Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference</a>

---

##### `ResourceStatement`<sup>Required</sup> <a name="ResourceStatement" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.property.resourceStatement"></a>

```go
func ResourceStatement() Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference">Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference</a>

---

##### `PacketHeaderStatementInput`<sup>Optional</sup> <a name="PacketHeaderStatementInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.property.packetHeaderStatementInput"></a>

```go
func PacketHeaderStatementInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceStatementInput`<sup>Optional</sup> <a name="ResourceStatementInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.property.resourceStatementInput"></a>

```go
func ResourceStatementInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference <a name="Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2networkinsightsaccessscope"

ec2networkinsightsaccessscope.NewEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.resetDestinationAddresses">ResetDestinationAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.resetDestinationPorts">ResetDestinationPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.resetDestinationPrefixLists">ResetDestinationPrefixLists</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.resetProtocols">ResetProtocols</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.resetSourceAddresses">ResetSourceAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.resetSourcePorts">ResetSourcePorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.resetSourcePrefixLists">ResetSourcePrefixLists</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationAddresses` <a name="ResetDestinationAddresses" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.resetDestinationAddresses"></a>

```go
func ResetDestinationAddresses()
```

##### `ResetDestinationPorts` <a name="ResetDestinationPorts" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.resetDestinationPorts"></a>

```go
func ResetDestinationPorts()
```

##### `ResetDestinationPrefixLists` <a name="ResetDestinationPrefixLists" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.resetDestinationPrefixLists"></a>

```go
func ResetDestinationPrefixLists()
```

##### `ResetProtocols` <a name="ResetProtocols" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.resetProtocols"></a>

```go
func ResetProtocols()
```

##### `ResetSourceAddresses` <a name="ResetSourceAddresses" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.resetSourceAddresses"></a>

```go
func ResetSourceAddresses()
```

##### `ResetSourcePorts` <a name="ResetSourcePorts" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.resetSourcePorts"></a>

```go
func ResetSourcePorts()
```

##### `ResetSourcePrefixLists` <a name="ResetSourcePrefixLists" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.resetSourcePrefixLists"></a>

```go
func ResetSourcePrefixLists()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.destinationAddressesInput">DestinationAddressesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.destinationPortsInput">DestinationPortsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.destinationPrefixListsInput">DestinationPrefixListsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.protocolsInput">ProtocolsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.sourceAddressesInput">SourceAddressesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.sourcePortsInput">SourcePortsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.sourcePrefixListsInput">SourcePrefixListsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.destinationAddresses">DestinationAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.destinationPorts">DestinationPorts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.destinationPrefixLists">DestinationPrefixLists</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.protocols">Protocols</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.sourceAddresses">SourceAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.sourcePorts">SourcePorts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.sourcePrefixLists">SourcePrefixLists</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationAddressesInput`<sup>Optional</sup> <a name="DestinationAddressesInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.destinationAddressesInput"></a>

```go
func DestinationAddressesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DestinationPortsInput`<sup>Optional</sup> <a name="DestinationPortsInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.destinationPortsInput"></a>

```go
func DestinationPortsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DestinationPrefixListsInput`<sup>Optional</sup> <a name="DestinationPrefixListsInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.destinationPrefixListsInput"></a>

```go
func DestinationPrefixListsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ProtocolsInput`<sup>Optional</sup> <a name="ProtocolsInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.protocolsInput"></a>

```go
func ProtocolsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SourceAddressesInput`<sup>Optional</sup> <a name="SourceAddressesInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.sourceAddressesInput"></a>

```go
func SourceAddressesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SourcePortsInput`<sup>Optional</sup> <a name="SourcePortsInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.sourcePortsInput"></a>

```go
func SourcePortsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SourcePrefixListsInput`<sup>Optional</sup> <a name="SourcePrefixListsInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.sourcePrefixListsInput"></a>

```go
func SourcePrefixListsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DestinationAddresses`<sup>Required</sup> <a name="DestinationAddresses" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.destinationAddresses"></a>

```go
func DestinationAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `DestinationPorts`<sup>Required</sup> <a name="DestinationPorts" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.destinationPorts"></a>

```go
func DestinationPorts() *[]*string
```

- *Type:* *[]*string

---

##### `DestinationPrefixLists`<sup>Required</sup> <a name="DestinationPrefixLists" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.destinationPrefixLists"></a>

```go
func DestinationPrefixLists() *[]*string
```

- *Type:* *[]*string

---

##### `Protocols`<sup>Required</sup> <a name="Protocols" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.protocols"></a>

```go
func Protocols() *[]*string
```

- *Type:* *[]*string

---

##### `SourceAddresses`<sup>Required</sup> <a name="SourceAddresses" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.sourceAddresses"></a>

```go
func SourceAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `SourcePorts`<sup>Required</sup> <a name="SourcePorts" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.sourcePorts"></a>

```go
func SourcePorts() *[]*string
```

- *Type:* *[]*string

---

##### `SourcePrefixLists`<sup>Required</sup> <a name="SourcePrefixLists" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.sourcePrefixLists"></a>

```go
func SourcePrefixLists() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference <a name="Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2networkinsightsaccessscope"

ec2networkinsightsaccessscope.NewEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.resetResources">ResetResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.resetResourceTypes">ResetResourceTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResources` <a name="ResetResources" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.resetResources"></a>

```go
func ResetResources()
```

##### `ResetResourceTypes` <a name="ResetResourceTypes" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.resetResourceTypes"></a>

```go
func ResetResourceTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.property.resourceTypesInput">ResourceTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.property.resources">Resources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.property.resourceTypes">ResourceTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.property.resourcesInput"></a>

```go
func ResourcesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceTypesInput`<sup>Optional</sup> <a name="ResourceTypesInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.property.resourceTypesInput"></a>

```go
func ResourceTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.property.resources"></a>

```go
func Resources() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceTypes`<sup>Required</sup> <a name="ResourceTypes" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.property.resourceTypes"></a>

```go
func ResourceTypes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList <a name="Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2networkinsightsaccessscope"

ec2networkinsightsaccessscope.NewEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.get"></a>

```go
func Get(index *f64) Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference <a name="Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2networkinsightsaccessscope"

ec2networkinsightsaccessscope.NewEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.putResourceStatement">PutResourceStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.resetResourceStatement">ResetResourceStatement</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutResourceStatement` <a name="PutResourceStatement" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.putResourceStatement"></a>

```go
func PutResourceStatement(value Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.putResourceStatement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement">Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement</a>

---

##### `ResetResourceStatement` <a name="ResetResourceStatement" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.resetResourceStatement"></a>

```go
func ResetResourceStatement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.property.resourceStatement">ResourceStatement</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference">Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.property.resourceStatementInput">ResourceStatementInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceStatement`<sup>Required</sup> <a name="ResourceStatement" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.property.resourceStatement"></a>

```go
func ResourceStatement() Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference">Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference</a>

---

##### `ResourceStatementInput`<sup>Optional</sup> <a name="ResourceStatementInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.property.resourceStatementInput"></a>

```go
func ResourceStatementInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference <a name="Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2networkinsightsaccessscope"

ec2networkinsightsaccessscope.NewEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.resetResources">ResetResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.resetResourceTypes">ResetResourceTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResources` <a name="ResetResources" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.resetResources"></a>

```go
func ResetResources()
```

##### `ResetResourceTypes` <a name="ResetResourceTypes" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.resetResourceTypes"></a>

```go
func ResetResourceTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.property.resourceTypesInput">ResourceTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.property.resources">Resources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.property.resourceTypes">ResourceTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.property.resourcesInput"></a>

```go
func ResourcesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceTypesInput`<sup>Optional</sup> <a name="ResourceTypesInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.property.resourceTypesInput"></a>

```go
func ResourceTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.property.resources"></a>

```go
func Resources() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceTypes`<sup>Required</sup> <a name="ResourceTypes" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.property.resourceTypes"></a>

```go
func ResourceTypes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference <a name="Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2networkinsightsaccessscope"

ec2networkinsightsaccessscope.NewEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.putPacketHeaderStatement">PutPacketHeaderStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.putResourceStatement">PutResourceStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.resetPacketHeaderStatement">ResetPacketHeaderStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.resetResourceStatement">ResetResourceStatement</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPacketHeaderStatement` <a name="PutPacketHeaderStatement" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.putPacketHeaderStatement"></a>

```go
func PutPacketHeaderStatement(value Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.putPacketHeaderStatement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement">Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement</a>

---

##### `PutResourceStatement` <a name="PutResourceStatement" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.putResourceStatement"></a>

```go
func PutResourceStatement(value Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.putResourceStatement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement">Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement</a>

---

##### `ResetPacketHeaderStatement` <a name="ResetPacketHeaderStatement" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.resetPacketHeaderStatement"></a>

```go
func ResetPacketHeaderStatement()
```

##### `ResetResourceStatement` <a name="ResetResourceStatement" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.resetResourceStatement"></a>

```go
func ResetResourceStatement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.property.packetHeaderStatement">PacketHeaderStatement</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference">Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.property.resourceStatement">ResourceStatement</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference">Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.property.packetHeaderStatementInput">PacketHeaderStatementInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.property.resourceStatementInput">ResourceStatementInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PacketHeaderStatement`<sup>Required</sup> <a name="PacketHeaderStatement" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.property.packetHeaderStatement"></a>

```go
func PacketHeaderStatement() Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference">Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference</a>

---

##### `ResourceStatement`<sup>Required</sup> <a name="ResourceStatement" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.property.resourceStatement"></a>

```go
func ResourceStatement() Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference">Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference</a>

---

##### `PacketHeaderStatementInput`<sup>Optional</sup> <a name="PacketHeaderStatementInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.property.packetHeaderStatementInput"></a>

```go
func PacketHeaderStatementInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceStatementInput`<sup>Optional</sup> <a name="ResourceStatementInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.property.resourceStatementInput"></a>

```go
func ResourceStatementInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference <a name="Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2networkinsightsaccessscope"

ec2networkinsightsaccessscope.NewEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.resetDestinationAddresses">ResetDestinationAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.resetDestinationPorts">ResetDestinationPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.resetDestinationPrefixLists">ResetDestinationPrefixLists</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.resetProtocols">ResetProtocols</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.resetSourceAddresses">ResetSourceAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.resetSourcePorts">ResetSourcePorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.resetSourcePrefixLists">ResetSourcePrefixLists</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationAddresses` <a name="ResetDestinationAddresses" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.resetDestinationAddresses"></a>

```go
func ResetDestinationAddresses()
```

##### `ResetDestinationPorts` <a name="ResetDestinationPorts" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.resetDestinationPorts"></a>

```go
func ResetDestinationPorts()
```

##### `ResetDestinationPrefixLists` <a name="ResetDestinationPrefixLists" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.resetDestinationPrefixLists"></a>

```go
func ResetDestinationPrefixLists()
```

##### `ResetProtocols` <a name="ResetProtocols" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.resetProtocols"></a>

```go
func ResetProtocols()
```

##### `ResetSourceAddresses` <a name="ResetSourceAddresses" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.resetSourceAddresses"></a>

```go
func ResetSourceAddresses()
```

##### `ResetSourcePorts` <a name="ResetSourcePorts" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.resetSourcePorts"></a>

```go
func ResetSourcePorts()
```

##### `ResetSourcePrefixLists` <a name="ResetSourcePrefixLists" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.resetSourcePrefixLists"></a>

```go
func ResetSourcePrefixLists()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.destinationAddressesInput">DestinationAddressesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.destinationPortsInput">DestinationPortsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.destinationPrefixListsInput">DestinationPrefixListsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.protocolsInput">ProtocolsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.sourceAddressesInput">SourceAddressesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.sourcePortsInput">SourcePortsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.sourcePrefixListsInput">SourcePrefixListsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.destinationAddresses">DestinationAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.destinationPorts">DestinationPorts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.destinationPrefixLists">DestinationPrefixLists</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.protocols">Protocols</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.sourceAddresses">SourceAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.sourcePorts">SourcePorts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.sourcePrefixLists">SourcePrefixLists</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationAddressesInput`<sup>Optional</sup> <a name="DestinationAddressesInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.destinationAddressesInput"></a>

```go
func DestinationAddressesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DestinationPortsInput`<sup>Optional</sup> <a name="DestinationPortsInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.destinationPortsInput"></a>

```go
func DestinationPortsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DestinationPrefixListsInput`<sup>Optional</sup> <a name="DestinationPrefixListsInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.destinationPrefixListsInput"></a>

```go
func DestinationPrefixListsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ProtocolsInput`<sup>Optional</sup> <a name="ProtocolsInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.protocolsInput"></a>

```go
func ProtocolsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SourceAddressesInput`<sup>Optional</sup> <a name="SourceAddressesInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.sourceAddressesInput"></a>

```go
func SourceAddressesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SourcePortsInput`<sup>Optional</sup> <a name="SourcePortsInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.sourcePortsInput"></a>

```go
func SourcePortsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SourcePrefixListsInput`<sup>Optional</sup> <a name="SourcePrefixListsInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.sourcePrefixListsInput"></a>

```go
func SourcePrefixListsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DestinationAddresses`<sup>Required</sup> <a name="DestinationAddresses" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.destinationAddresses"></a>

```go
func DestinationAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `DestinationPorts`<sup>Required</sup> <a name="DestinationPorts" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.destinationPorts"></a>

```go
func DestinationPorts() *[]*string
```

- *Type:* *[]*string

---

##### `DestinationPrefixLists`<sup>Required</sup> <a name="DestinationPrefixLists" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.destinationPrefixLists"></a>

```go
func DestinationPrefixLists() *[]*string
```

- *Type:* *[]*string

---

##### `Protocols`<sup>Required</sup> <a name="Protocols" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.protocols"></a>

```go
func Protocols() *[]*string
```

- *Type:* *[]*string

---

##### `SourceAddresses`<sup>Required</sup> <a name="SourceAddresses" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.sourceAddresses"></a>

```go
func SourceAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `SourcePorts`<sup>Required</sup> <a name="SourcePorts" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.sourcePorts"></a>

```go
func SourcePorts() *[]*string
```

- *Type:* *[]*string

---

##### `SourcePrefixLists`<sup>Required</sup> <a name="SourcePrefixLists" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.sourcePrefixLists"></a>

```go
func SourcePrefixLists() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference <a name="Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2networkinsightsaccessscope"

ec2networkinsightsaccessscope.NewEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.resetResources">ResetResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.resetResourceTypes">ResetResourceTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResources` <a name="ResetResources" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.resetResources"></a>

```go
func ResetResources()
```

##### `ResetResourceTypes` <a name="ResetResourceTypes" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.resetResourceTypes"></a>

```go
func ResetResourceTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.property.resourceTypesInput">ResourceTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.property.resources">Resources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.property.resourceTypes">ResourceTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.property.resourcesInput"></a>

```go
func ResourcesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceTypesInput`<sup>Optional</sup> <a name="ResourceTypesInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.property.resourceTypesInput"></a>

```go
func ResourceTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.property.resources"></a>

```go
func Resources() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceTypes`<sup>Required</sup> <a name="ResourceTypes" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.property.resourceTypes"></a>

```go
func ResourceTypes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2NetworkInsightsAccessScopeMatchPathsList <a name="Ec2NetworkInsightsAccessScopeMatchPathsList" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2networkinsightsaccessscope"

ec2networkinsightsaccessscope.NewEc2NetworkInsightsAccessScopeMatchPathsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Ec2NetworkInsightsAccessScopeMatchPathsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.get"></a>

```go
func Get(index *f64) Ec2NetworkInsightsAccessScopeMatchPathsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2NetworkInsightsAccessScopeMatchPathsOutputReference <a name="Ec2NetworkInsightsAccessScopeMatchPathsOutputReference" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2networkinsightsaccessscope"

ec2networkinsightsaccessscope.NewEc2NetworkInsightsAccessScopeMatchPathsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Ec2NetworkInsightsAccessScopeMatchPathsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.putDestination">PutDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.putThroughResources">PutThroughResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.resetDestination">ResetDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.resetThroughResources">ResetThroughResources</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestination` <a name="PutDestination" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.putDestination"></a>

```go
func PutDestination(value Ec2NetworkInsightsAccessScopeMatchPathsDestination)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.putDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestination">Ec2NetworkInsightsAccessScopeMatchPathsDestination</a>

---

##### `PutSource` <a name="PutSource" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.putSource"></a>

```go
func PutSource(value Ec2NetworkInsightsAccessScopeMatchPathsSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSource">Ec2NetworkInsightsAccessScopeMatchPathsSource</a>

---

##### `PutThroughResources` <a name="PutThroughResources" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.putThroughResources"></a>

```go
func PutThroughResources(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.putThroughResources.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDestination` <a name="ResetDestination" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.resetDestination"></a>

```go
func ResetDestination()
```

##### `ResetSource` <a name="ResetSource" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.resetSource"></a>

```go
func ResetSource()
```

##### `ResetThroughResources` <a name="ResetThroughResources" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.resetThroughResources"></a>

```go
func ResetThroughResources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.property.destination">Destination</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference">Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.property.source">Source</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference">Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.property.throughResources">ThroughResources</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesList">Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.property.destinationInput">DestinationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.property.sourceInput">SourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.property.throughResourcesInput">ThroughResourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.property.destination"></a>

```go
func Destination() Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference">Ec2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.property.source"></a>

```go
func Source() Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference">Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference</a>

---

##### `ThroughResources`<sup>Required</sup> <a name="ThroughResources" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.property.throughResources"></a>

```go
func ThroughResources() Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesList">Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesList</a>

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.property.destinationInput"></a>

```go
func DestinationInput() interface{}
```

- *Type:* interface{}

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.property.sourceInput"></a>

```go
func SourceInput() interface{}
```

- *Type:* interface{}

---

##### `ThroughResourcesInput`<sup>Optional</sup> <a name="ThroughResourcesInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.property.throughResourcesInput"></a>

```go
func ThroughResourcesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference <a name="Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2networkinsightsaccessscope"

ec2networkinsightsaccessscope.NewEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.putPacketHeaderStatement">PutPacketHeaderStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.putResourceStatement">PutResourceStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.resetPacketHeaderStatement">ResetPacketHeaderStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.resetResourceStatement">ResetResourceStatement</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPacketHeaderStatement` <a name="PutPacketHeaderStatement" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.putPacketHeaderStatement"></a>

```go
func PutPacketHeaderStatement(value Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.putPacketHeaderStatement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement">Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement</a>

---

##### `PutResourceStatement` <a name="PutResourceStatement" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.putResourceStatement"></a>

```go
func PutResourceStatement(value Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.putResourceStatement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement">Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement</a>

---

##### `ResetPacketHeaderStatement` <a name="ResetPacketHeaderStatement" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.resetPacketHeaderStatement"></a>

```go
func ResetPacketHeaderStatement()
```

##### `ResetResourceStatement` <a name="ResetResourceStatement" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.resetResourceStatement"></a>

```go
func ResetResourceStatement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.property.packetHeaderStatement">PacketHeaderStatement</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference">Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.property.resourceStatement">ResourceStatement</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference">Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.property.packetHeaderStatementInput">PacketHeaderStatementInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.property.resourceStatementInput">ResourceStatementInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PacketHeaderStatement`<sup>Required</sup> <a name="PacketHeaderStatement" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.property.packetHeaderStatement"></a>

```go
func PacketHeaderStatement() Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference">Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference</a>

---

##### `ResourceStatement`<sup>Required</sup> <a name="ResourceStatement" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.property.resourceStatement"></a>

```go
func ResourceStatement() Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference">Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference</a>

---

##### `PacketHeaderStatementInput`<sup>Optional</sup> <a name="PacketHeaderStatementInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.property.packetHeaderStatementInput"></a>

```go
func PacketHeaderStatementInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceStatementInput`<sup>Optional</sup> <a name="ResourceStatementInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.property.resourceStatementInput"></a>

```go
func ResourceStatementInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference <a name="Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2networkinsightsaccessscope"

ec2networkinsightsaccessscope.NewEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.resetDestinationAddresses">ResetDestinationAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.resetDestinationPorts">ResetDestinationPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.resetDestinationPrefixLists">ResetDestinationPrefixLists</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.resetProtocols">ResetProtocols</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.resetSourceAddresses">ResetSourceAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.resetSourcePorts">ResetSourcePorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.resetSourcePrefixLists">ResetSourcePrefixLists</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationAddresses` <a name="ResetDestinationAddresses" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.resetDestinationAddresses"></a>

```go
func ResetDestinationAddresses()
```

##### `ResetDestinationPorts` <a name="ResetDestinationPorts" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.resetDestinationPorts"></a>

```go
func ResetDestinationPorts()
```

##### `ResetDestinationPrefixLists` <a name="ResetDestinationPrefixLists" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.resetDestinationPrefixLists"></a>

```go
func ResetDestinationPrefixLists()
```

##### `ResetProtocols` <a name="ResetProtocols" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.resetProtocols"></a>

```go
func ResetProtocols()
```

##### `ResetSourceAddresses` <a name="ResetSourceAddresses" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.resetSourceAddresses"></a>

```go
func ResetSourceAddresses()
```

##### `ResetSourcePorts` <a name="ResetSourcePorts" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.resetSourcePorts"></a>

```go
func ResetSourcePorts()
```

##### `ResetSourcePrefixLists` <a name="ResetSourcePrefixLists" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.resetSourcePrefixLists"></a>

```go
func ResetSourcePrefixLists()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.destinationAddressesInput">DestinationAddressesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.destinationPortsInput">DestinationPortsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.destinationPrefixListsInput">DestinationPrefixListsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.protocolsInput">ProtocolsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.sourceAddressesInput">SourceAddressesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.sourcePortsInput">SourcePortsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.sourcePrefixListsInput">SourcePrefixListsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.destinationAddresses">DestinationAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.destinationPorts">DestinationPorts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.destinationPrefixLists">DestinationPrefixLists</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.protocols">Protocols</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.sourceAddresses">SourceAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.sourcePorts">SourcePorts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.sourcePrefixLists">SourcePrefixLists</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationAddressesInput`<sup>Optional</sup> <a name="DestinationAddressesInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.destinationAddressesInput"></a>

```go
func DestinationAddressesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DestinationPortsInput`<sup>Optional</sup> <a name="DestinationPortsInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.destinationPortsInput"></a>

```go
func DestinationPortsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DestinationPrefixListsInput`<sup>Optional</sup> <a name="DestinationPrefixListsInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.destinationPrefixListsInput"></a>

```go
func DestinationPrefixListsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ProtocolsInput`<sup>Optional</sup> <a name="ProtocolsInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.protocolsInput"></a>

```go
func ProtocolsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SourceAddressesInput`<sup>Optional</sup> <a name="SourceAddressesInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.sourceAddressesInput"></a>

```go
func SourceAddressesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SourcePortsInput`<sup>Optional</sup> <a name="SourcePortsInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.sourcePortsInput"></a>

```go
func SourcePortsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SourcePrefixListsInput`<sup>Optional</sup> <a name="SourcePrefixListsInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.sourcePrefixListsInput"></a>

```go
func SourcePrefixListsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DestinationAddresses`<sup>Required</sup> <a name="DestinationAddresses" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.destinationAddresses"></a>

```go
func DestinationAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `DestinationPorts`<sup>Required</sup> <a name="DestinationPorts" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.destinationPorts"></a>

```go
func DestinationPorts() *[]*string
```

- *Type:* *[]*string

---

##### `DestinationPrefixLists`<sup>Required</sup> <a name="DestinationPrefixLists" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.destinationPrefixLists"></a>

```go
func DestinationPrefixLists() *[]*string
```

- *Type:* *[]*string

---

##### `Protocols`<sup>Required</sup> <a name="Protocols" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.protocols"></a>

```go
func Protocols() *[]*string
```

- *Type:* *[]*string

---

##### `SourceAddresses`<sup>Required</sup> <a name="SourceAddresses" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.sourceAddresses"></a>

```go
func SourceAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `SourcePorts`<sup>Required</sup> <a name="SourcePorts" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.sourcePorts"></a>

```go
func SourcePorts() *[]*string
```

- *Type:* *[]*string

---

##### `SourcePrefixLists`<sup>Required</sup> <a name="SourcePrefixLists" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.sourcePrefixLists"></a>

```go
func SourcePrefixLists() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference <a name="Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2networkinsightsaccessscope"

ec2networkinsightsaccessscope.NewEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.resetResources">ResetResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.resetResourceTypes">ResetResourceTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResources` <a name="ResetResources" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.resetResources"></a>

```go
func ResetResources()
```

##### `ResetResourceTypes` <a name="ResetResourceTypes" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.resetResourceTypes"></a>

```go
func ResetResourceTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.property.resourceTypesInput">ResourceTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.property.resources">Resources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.property.resourceTypes">ResourceTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.property.resourcesInput"></a>

```go
func ResourcesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceTypesInput`<sup>Optional</sup> <a name="ResourceTypesInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.property.resourceTypesInput"></a>

```go
func ResourceTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.property.resources"></a>

```go
func Resources() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceTypes`<sup>Required</sup> <a name="ResourceTypes" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.property.resourceTypes"></a>

```go
func ResourceTypes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesList <a name="Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesList" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2networkinsightsaccessscope"

ec2networkinsightsaccessscope.NewEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.get"></a>

```go
func Get(index *f64) Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference <a name="Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2networkinsightsaccessscope"

ec2networkinsightsaccessscope.NewEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.putResourceStatement">PutResourceStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.resetResourceStatement">ResetResourceStatement</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutResourceStatement` <a name="PutResourceStatement" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.putResourceStatement"></a>

```go
func PutResourceStatement(value Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatement)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.putResourceStatement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatement">Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatement</a>

---

##### `ResetResourceStatement` <a name="ResetResourceStatement" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.resetResourceStatement"></a>

```go
func ResetResourceStatement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.property.resourceStatement">ResourceStatement</a></code> | <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference">Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.property.resourceStatementInput">ResourceStatementInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceStatement`<sup>Required</sup> <a name="ResourceStatement" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.property.resourceStatement"></a>

```go
func ResourceStatement() Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference">Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference</a>

---

##### `ResourceStatementInput`<sup>Optional</sup> <a name="ResourceStatementInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.property.resourceStatementInput"></a>

```go
func ResourceStatementInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference <a name="Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2networkinsightsaccessscope"

ec2networkinsightsaccessscope.NewEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.resetResources">ResetResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.resetResourceTypes">ResetResourceTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResources` <a name="ResetResources" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.resetResources"></a>

```go
func ResetResources()
```

##### `ResetResourceTypes` <a name="ResetResourceTypes" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.resetResourceTypes"></a>

```go
func ResetResourceTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.property.resourceTypesInput">ResourceTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.property.resources">Resources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.property.resourceTypes">ResourceTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.property.resourcesInput"></a>

```go
func ResourcesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceTypesInput`<sup>Optional</sup> <a name="ResourceTypesInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.property.resourceTypesInput"></a>

```go
func ResourceTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.property.resources"></a>

```go
func Resources() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceTypes`<sup>Required</sup> <a name="ResourceTypes" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.property.resourceTypes"></a>

```go
func ResourceTypes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2NetworkInsightsAccessScopeTagsList <a name="Ec2NetworkInsightsAccessScopeTagsList" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2networkinsightsaccessscope"

ec2networkinsightsaccessscope.NewEc2NetworkInsightsAccessScopeTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Ec2NetworkInsightsAccessScopeTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsList.get"></a>

```go
func Get(index *f64) Ec2NetworkInsightsAccessScopeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2NetworkInsightsAccessScopeTagsOutputReference <a name="Ec2NetworkInsightsAccessScopeTagsOutputReference" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2networkinsightsaccessscope"

ec2networkinsightsaccessscope.NewEc2NetworkInsightsAccessScopeTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Ec2NetworkInsightsAccessScopeTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2NetworkInsightsAccessScope.Ec2NetworkInsightsAccessScopeTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



