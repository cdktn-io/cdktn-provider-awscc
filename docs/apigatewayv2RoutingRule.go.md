# `apigatewayv2RoutingRule` Submodule <a name="`apigatewayv2RoutingRule` Submodule" id="@cdktn/provider-awscc.apigatewayv2RoutingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Apigatewayv2RoutingRule <a name="Apigatewayv2RoutingRule" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_routing_rule awscc_apigatewayv2_routing_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayv2routingrule"

apigatewayv2routingrule.NewApigatewayv2RoutingRule(scope Construct, id *string, config Apigatewayv2RoutingRuleConfig) Apigatewayv2RoutingRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig">Apigatewayv2RoutingRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig">Apigatewayv2RoutingRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.putActions">PutActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.putConditions">PutConditions</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutActions` <a name="PutActions" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.putActions"></a>

```go
func PutActions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.putActions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutConditions` <a name="PutConditions" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.putConditions"></a>

```go
func PutConditions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.putConditions.parameter.value"></a>

- *Type:* interface{}

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Apigatewayv2RoutingRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayv2routingrule"

apigatewayv2routingrule.Apigatewayv2RoutingRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayv2routingrule"

apigatewayv2routingrule.Apigatewayv2RoutingRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayv2routingrule"

apigatewayv2routingrule.Apigatewayv2RoutingRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayv2routingrule"

apigatewayv2routingrule.Apigatewayv2RoutingRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Apigatewayv2RoutingRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Apigatewayv2RoutingRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Apigatewayv2RoutingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_routing_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Apigatewayv2RoutingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.actions">Actions</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList">Apigatewayv2RoutingRuleActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList">Apigatewayv2RoutingRuleConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.routingRuleArn">RoutingRuleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.routingRuleId">RoutingRuleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.actionsInput">ActionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.conditionsInput">ConditionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.domainNameArnInput">DomainNameArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.domainNameArn">DomainNameArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.actions"></a>

```go
func Actions() Apigatewayv2RoutingRuleActionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList">Apigatewayv2RoutingRuleActionsList</a>

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.conditions"></a>

```go
func Conditions() Apigatewayv2RoutingRuleConditionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList">Apigatewayv2RoutingRuleConditionsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RoutingRuleArn`<sup>Required</sup> <a name="RoutingRuleArn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.routingRuleArn"></a>

```go
func RoutingRuleArn() *string
```

- *Type:* *string

---

##### `RoutingRuleId`<sup>Required</sup> <a name="RoutingRuleId" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.routingRuleId"></a>

```go
func RoutingRuleId() *string
```

- *Type:* *string

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.actionsInput"></a>

```go
func ActionsInput() interface{}
```

- *Type:* interface{}

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.conditionsInput"></a>

```go
func ConditionsInput() interface{}
```

- *Type:* interface{}

---

##### `DomainNameArnInput`<sup>Optional</sup> <a name="DomainNameArnInput" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.domainNameArnInput"></a>

```go
func DomainNameArnInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `DomainNameArn`<sup>Required</sup> <a name="DomainNameArn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.domainNameArn"></a>

```go
func DomainNameArn() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Apigatewayv2RoutingRuleActions <a name="Apigatewayv2RoutingRuleActions" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayv2routingrule"

&apigatewayv2routingrule.Apigatewayv2RoutingRuleActions {
	InvokeApi: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApi,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActions.property.invokeApi">InvokeApi</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApi">Apigatewayv2RoutingRuleActionsInvokeApi</a></code> | Represents an InvokeApi action. |

---

##### `InvokeApi`<sup>Required</sup> <a name="InvokeApi" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActions.property.invokeApi"></a>

```go
InvokeApi Apigatewayv2RoutingRuleActionsInvokeApi
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApi">Apigatewayv2RoutingRuleActionsInvokeApi</a>

Represents an InvokeApi action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_routing_rule#invoke_api Apigatewayv2RoutingRule#invoke_api}

---

### Apigatewayv2RoutingRuleActionsInvokeApi <a name="Apigatewayv2RoutingRuleActionsInvokeApi" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApi"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApi.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayv2routingrule"

&apigatewayv2routingrule.Apigatewayv2RoutingRuleActionsInvokeApi {
	ApiId: *string,
	Stage: *string,
	StripBasePath: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApi.property.apiId">ApiId</a></code> | <code>*string</code> | The API identifier of the target API. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApi.property.stage">Stage</a></code> | <code>*string</code> | The name of the target stage. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApi.property.stripBasePath">StripBasePath</a></code> | <code>interface{}</code> | The strip base path setting. |

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApi.property.apiId"></a>

```go
ApiId *string
```

- *Type:* *string

The API identifier of the target API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_routing_rule#api_id Apigatewayv2RoutingRule#api_id}

---

##### `Stage`<sup>Required</sup> <a name="Stage" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApi.property.stage"></a>

```go
Stage *string
```

- *Type:* *string

The name of the target stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_routing_rule#stage Apigatewayv2RoutingRule#stage}

---

##### `StripBasePath`<sup>Optional</sup> <a name="StripBasePath" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApi.property.stripBasePath"></a>

```go
StripBasePath interface{}
```

- *Type:* interface{}

The strip base path setting.

When true, API Gateway strips the incoming matched base path when forwarding the request to the target API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_routing_rule#strip_base_path Apigatewayv2RoutingRule#strip_base_path}

---

### Apigatewayv2RoutingRuleConditions <a name="Apigatewayv2RoutingRuleConditions" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayv2routingrule"

&apigatewayv2routingrule.Apigatewayv2RoutingRuleConditions {
	MatchBasePaths: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePaths,
	MatchHeaders: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeaders,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditions.property.matchBasePaths">MatchBasePaths</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePaths">Apigatewayv2RoutingRuleConditionsMatchBasePaths</a></code> | The base path to be matched. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditions.property.matchHeaders">MatchHeaders</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeaders">Apigatewayv2RoutingRuleConditionsMatchHeaders</a></code> | The headers to be matched. |

---

##### `MatchBasePaths`<sup>Optional</sup> <a name="MatchBasePaths" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditions.property.matchBasePaths"></a>

```go
MatchBasePaths Apigatewayv2RoutingRuleConditionsMatchBasePaths
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePaths">Apigatewayv2RoutingRuleConditionsMatchBasePaths</a>

The base path to be matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_routing_rule#match_base_paths Apigatewayv2RoutingRule#match_base_paths}

---

##### `MatchHeaders`<sup>Optional</sup> <a name="MatchHeaders" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditions.property.matchHeaders"></a>

```go
MatchHeaders Apigatewayv2RoutingRuleConditionsMatchHeaders
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeaders">Apigatewayv2RoutingRuleConditionsMatchHeaders</a>

The headers to be matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_routing_rule#match_headers Apigatewayv2RoutingRule#match_headers}

---

### Apigatewayv2RoutingRuleConditionsMatchBasePaths <a name="Apigatewayv2RoutingRuleConditionsMatchBasePaths" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePaths"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePaths.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayv2routingrule"

&apigatewayv2routingrule.Apigatewayv2RoutingRuleConditionsMatchBasePaths {
	AnyOf: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePaths.property.anyOf">AnyOf</a></code> | <code>*[]*string</code> | The string of the case sensitive base path to be matched. |

---

##### `AnyOf`<sup>Optional</sup> <a name="AnyOf" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePaths.property.anyOf"></a>

```go
AnyOf *[]*string
```

- *Type:* *[]*string

The string of the case sensitive base path to be matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_routing_rule#any_of Apigatewayv2RoutingRule#any_of}

---

### Apigatewayv2RoutingRuleConditionsMatchHeaders <a name="Apigatewayv2RoutingRuleConditionsMatchHeaders" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeaders.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayv2routingrule"

&apigatewayv2routingrule.Apigatewayv2RoutingRuleConditionsMatchHeaders {
	AnyOf: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeaders.property.anyOf">AnyOf</a></code> | <code>interface{}</code> | The header name and header value glob to be matched. |

---

##### `AnyOf`<sup>Optional</sup> <a name="AnyOf" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeaders.property.anyOf"></a>

```go
AnyOf interface{}
```

- *Type:* interface{}

The header name and header value glob to be matched.

The matchHeaders condition is matched if any of the header name and header value globs are matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_routing_rule#any_of Apigatewayv2RoutingRule#any_of}

---

### Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf <a name="Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayv2routingrule"

&apigatewayv2routingrule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf {
	Header: *string,
	ValueGlob: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf.property.header">Header</a></code> | <code>*string</code> | The case insensitive header name to be matched. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf.property.valueGlob">ValueGlob</a></code> | <code>*string</code> | The case sensitive header glob value to be matched against entire header value. |

---

##### `Header`<sup>Optional</sup> <a name="Header" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf.property.header"></a>

```go
Header *string
```

- *Type:* *string

The case insensitive header name to be matched.

The header name must be less than 40 characters and the only allowed characters are `a-z`, `A-Z`, `0-9`, and the following special characters: `*?-!#$%&'.^_`|~.`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_routing_rule#header Apigatewayv2RoutingRule#header}

---

##### `ValueGlob`<sup>Optional</sup> <a name="ValueGlob" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOf.property.valueGlob"></a>

```go
ValueGlob *string
```

- *Type:* *string

The case sensitive header glob value to be matched against entire header value.

The header glob value must be less than 128 characters and the only allowed characters are `a-z`, `A-Z`, `0-9`, and the following special characters: `*?-!#$%&'.^_`|~`. Wildcard matching is supported for header glob values but must be for `*prefix-match`, `suffix-match*`, or `*infix*-match`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_routing_rule#value_glob Apigatewayv2RoutingRule#value_glob}

---

### Apigatewayv2RoutingRuleConfig <a name="Apigatewayv2RoutingRuleConfig" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayv2routingrule"

&apigatewayv2routingrule.Apigatewayv2RoutingRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Actions: interface{},
	Conditions: interface{},
	DomainNameArn: *string,
	Priority: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.actions">Actions</a></code> | <code>interface{}</code> | The resulting action based on matching a routing rules condition. Only InvokeApi is supported. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.conditions">Conditions</a></code> | <code>interface{}</code> | The conditions of the routing rule. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.domainNameArn">DomainNameArn</a></code> | <code>*string</code> | The ARN of the domain name. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.priority">Priority</a></code> | <code>*f64</code> | The order in which API Gateway evaluates a rule. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.actions"></a>

```go
Actions interface{}
```

- *Type:* interface{}

The resulting action based on matching a routing rules condition. Only InvokeApi is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_routing_rule#actions Apigatewayv2RoutingRule#actions}

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.conditions"></a>

```go
Conditions interface{}
```

- *Type:* interface{}

The conditions of the routing rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_routing_rule#conditions Apigatewayv2RoutingRule#conditions}

---

##### `DomainNameArn`<sup>Required</sup> <a name="DomainNameArn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.domainNameArn"></a>

```go
DomainNameArn *string
```

- *Type:* *string

The ARN of the domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_routing_rule#domain_name_arn Apigatewayv2RoutingRule#domain_name_arn}

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

The order in which API Gateway evaluates a rule.

Priority is evaluated from the lowest value to the highest value. Rules can't have the same priority. Priority values 1-1,000,000 are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigatewayv2_routing_rule#priority Apigatewayv2RoutingRule#priority}

---

## Classes <a name="Classes" id="Classes"></a>

### Apigatewayv2RoutingRuleActionsInvokeApiOutputReference <a name="Apigatewayv2RoutingRuleActionsInvokeApiOutputReference" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayv2routingrule"

apigatewayv2routingrule.NewApigatewayv2RoutingRuleActionsInvokeApiOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Apigatewayv2RoutingRuleActionsInvokeApiOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.resetStripBasePath">ResetStripBasePath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStripBasePath` <a name="ResetStripBasePath" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.resetStripBasePath"></a>

```go
func ResetStripBasePath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.apiIdInput">ApiIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.stageInput">StageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.stripBasePathInput">StripBasePathInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.apiId">ApiId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.stage">Stage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.stripBasePath">StripBasePath</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiIdInput`<sup>Optional</sup> <a name="ApiIdInput" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.apiIdInput"></a>

```go
func ApiIdInput() *string
```

- *Type:* *string

---

##### `StageInput`<sup>Optional</sup> <a name="StageInput" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.stageInput"></a>

```go
func StageInput() *string
```

- *Type:* *string

---

##### `StripBasePathInput`<sup>Optional</sup> <a name="StripBasePathInput" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.stripBasePathInput"></a>

```go
func StripBasePathInput() interface{}
```

- *Type:* interface{}

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.apiId"></a>

```go
func ApiId() *string
```

- *Type:* *string

---

##### `Stage`<sup>Required</sup> <a name="Stage" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.stage"></a>

```go
func Stage() *string
```

- *Type:* *string

---

##### `StripBasePath`<sup>Required</sup> <a name="StripBasePath" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.stripBasePath"></a>

```go
func StripBasePath() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Apigatewayv2RoutingRuleActionsList <a name="Apigatewayv2RoutingRuleActionsList" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayv2routingrule"

apigatewayv2routingrule.NewApigatewayv2RoutingRuleActionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Apigatewayv2RoutingRuleActionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.get"></a>

```go
func Get(index *f64) Apigatewayv2RoutingRuleActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Apigatewayv2RoutingRuleActionsOutputReference <a name="Apigatewayv2RoutingRuleActionsOutputReference" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayv2routingrule"

apigatewayv2routingrule.NewApigatewayv2RoutingRuleActionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Apigatewayv2RoutingRuleActionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.putInvokeApi">PutInvokeApi</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInvokeApi` <a name="PutInvokeApi" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.putInvokeApi"></a>

```go
func PutInvokeApi(value Apigatewayv2RoutingRuleActionsInvokeApi)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.putInvokeApi.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApi">Apigatewayv2RoutingRuleActionsInvokeApi</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.property.invokeApi">InvokeApi</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference">Apigatewayv2RoutingRuleActionsInvokeApiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.property.invokeApiInput">InvokeApiInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InvokeApi`<sup>Required</sup> <a name="InvokeApi" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.property.invokeApi"></a>

```go
func InvokeApi() Apigatewayv2RoutingRuleActionsInvokeApiOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsInvokeApiOutputReference">Apigatewayv2RoutingRuleActionsInvokeApiOutputReference</a>

---

##### `InvokeApiInput`<sup>Optional</sup> <a name="InvokeApiInput" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.property.invokeApiInput"></a>

```go
func InvokeApiInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Apigatewayv2RoutingRuleConditionsList <a name="Apigatewayv2RoutingRuleConditionsList" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayv2routingrule"

apigatewayv2routingrule.NewApigatewayv2RoutingRuleConditionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Apigatewayv2RoutingRuleConditionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.get"></a>

```go
func Get(index *f64) Apigatewayv2RoutingRuleConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference <a name="Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayv2routingrule"

apigatewayv2routingrule.NewApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.resetAnyOf">ResetAnyOf</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnyOf` <a name="ResetAnyOf" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.resetAnyOf"></a>

```go
func ResetAnyOf()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.property.anyOfInput">AnyOfInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.property.anyOf">AnyOf</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AnyOfInput`<sup>Optional</sup> <a name="AnyOfInput" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.property.anyOfInput"></a>

```go
func AnyOfInput() *[]*string
```

- *Type:* *[]*string

---

##### `AnyOf`<sup>Required</sup> <a name="AnyOf" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.property.anyOf"></a>

```go
func AnyOf() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList <a name="Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayv2routingrule"

apigatewayv2routingrule.NewApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.get"></a>

```go
func Get(index *f64) Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference <a name="Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayv2routingrule"

apigatewayv2routingrule.NewApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.resetHeader">ResetHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.resetValueGlob">ResetValueGlob</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHeader` <a name="ResetHeader" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.resetHeader"></a>

```go
func ResetHeader()
```

##### `ResetValueGlob` <a name="ResetValueGlob" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.resetValueGlob"></a>

```go
func ResetValueGlob()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.property.headerInput">HeaderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.property.valueGlobInput">ValueGlobInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.property.header">Header</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.property.valueGlob">ValueGlob</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HeaderInput`<sup>Optional</sup> <a name="HeaderInput" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.property.headerInput"></a>

```go
func HeaderInput() *string
```

- *Type:* *string

---

##### `ValueGlobInput`<sup>Optional</sup> <a name="ValueGlobInput" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.property.valueGlobInput"></a>

```go
func ValueGlobInput() *string
```

- *Type:* *string

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.property.header"></a>

```go
func Header() *string
```

- *Type:* *string

---

##### `ValueGlob`<sup>Required</sup> <a name="ValueGlob" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.property.valueGlob"></a>

```go
func ValueGlob() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference <a name="Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayv2routingrule"

apigatewayv2routingrule.NewApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.putAnyOf">PutAnyOf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.resetAnyOf">ResetAnyOf</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAnyOf` <a name="PutAnyOf" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.putAnyOf"></a>

```go
func PutAnyOf(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.putAnyOf.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAnyOf` <a name="ResetAnyOf" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.resetAnyOf"></a>

```go
func ResetAnyOf()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.property.anyOf">AnyOf</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList">Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.property.anyOfInput">AnyOfInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AnyOf`<sup>Required</sup> <a name="AnyOf" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.property.anyOf"></a>

```go
func AnyOf() Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList">Apigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList</a>

---

##### `AnyOfInput`<sup>Optional</sup> <a name="AnyOfInput" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.property.anyOfInput"></a>

```go
func AnyOfInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Apigatewayv2RoutingRuleConditionsOutputReference <a name="Apigatewayv2RoutingRuleConditionsOutputReference" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayv2routingrule"

apigatewayv2routingrule.NewApigatewayv2RoutingRuleConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Apigatewayv2RoutingRuleConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.putMatchBasePaths">PutMatchBasePaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.putMatchHeaders">PutMatchHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.resetMatchBasePaths">ResetMatchBasePaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.resetMatchHeaders">ResetMatchHeaders</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatchBasePaths` <a name="PutMatchBasePaths" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.putMatchBasePaths"></a>

```go
func PutMatchBasePaths(value Apigatewayv2RoutingRuleConditionsMatchBasePaths)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.putMatchBasePaths.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePaths">Apigatewayv2RoutingRuleConditionsMatchBasePaths</a>

---

##### `PutMatchHeaders` <a name="PutMatchHeaders" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.putMatchHeaders"></a>

```go
func PutMatchHeaders(value Apigatewayv2RoutingRuleConditionsMatchHeaders)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.putMatchHeaders.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeaders">Apigatewayv2RoutingRuleConditionsMatchHeaders</a>

---

##### `ResetMatchBasePaths` <a name="ResetMatchBasePaths" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.resetMatchBasePaths"></a>

```go
func ResetMatchBasePaths()
```

##### `ResetMatchHeaders` <a name="ResetMatchHeaders" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.resetMatchHeaders"></a>

```go
func ResetMatchHeaders()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.property.matchBasePaths">MatchBasePaths</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference">Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.property.matchHeaders">MatchHeaders</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference">Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.property.matchBasePathsInput">MatchBasePathsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.property.matchHeadersInput">MatchHeadersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchBasePaths`<sup>Required</sup> <a name="MatchBasePaths" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.property.matchBasePaths"></a>

```go
func MatchBasePaths() Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference">Apigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference</a>

---

##### `MatchHeaders`<sup>Required</sup> <a name="MatchHeaders" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.property.matchHeaders"></a>

```go
func MatchHeaders() Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference">Apigatewayv2RoutingRuleConditionsMatchHeadersOutputReference</a>

---

##### `MatchBasePathsInput`<sup>Optional</sup> <a name="MatchBasePathsInput" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.property.matchBasePathsInput"></a>

```go
func MatchBasePathsInput() interface{}
```

- *Type:* interface{}

---

##### `MatchHeadersInput`<sup>Optional</sup> <a name="MatchHeadersInput" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.property.matchHeadersInput"></a>

```go
func MatchHeadersInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



