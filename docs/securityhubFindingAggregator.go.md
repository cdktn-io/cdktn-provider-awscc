# `securityhubFindingAggregator` Submodule <a name="`securityhubFindingAggregator` Submodule" id="@cdktn/provider-awscc.securityhubFindingAggregator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityhubFindingAggregator <a name="SecurityhubFindingAggregator" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_finding_aggregator awscc_securityhub_finding_aggregator}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityhubfindingaggregator"

securityhubfindingaggregator.NewSecurityhubFindingAggregator(scope Construct, id *string, config SecurityhubFindingAggregatorConfig) SecurityhubFindingAggregator
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregatorConfig">SecurityhubFindingAggregatorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregatorConfig">SecurityhubFindingAggregatorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.resetRegions">ResetRegions</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetRegions` <a name="ResetRegions" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.resetRegions"></a>

```go
func ResetRegions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SecurityhubFindingAggregator resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityhubfindingaggregator"

securityhubfindingaggregator.SecurityhubFindingAggregator_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityhubfindingaggregator"

securityhubfindingaggregator.SecurityhubFindingAggregator_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityhubfindingaggregator"

securityhubfindingaggregator.SecurityhubFindingAggregator_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityhubfindingaggregator"

securityhubfindingaggregator.SecurityhubFindingAggregator_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SecurityhubFindingAggregator resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SecurityhubFindingAggregator to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SecurityhubFindingAggregator that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_finding_aggregator#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SecurityhubFindingAggregator to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.property.findingAggregationRegion">FindingAggregationRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.property.findingAggregatorArn">FindingAggregatorArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.property.regionLinkingModeInput">RegionLinkingModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.property.regionsInput">RegionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.property.regionLinkingMode">RegionLinkingMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.property.regions">Regions</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FindingAggregationRegion`<sup>Required</sup> <a name="FindingAggregationRegion" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.property.findingAggregationRegion"></a>

```go
func FindingAggregationRegion() *string
```

- *Type:* *string

---

##### `FindingAggregatorArn`<sup>Required</sup> <a name="FindingAggregatorArn" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.property.findingAggregatorArn"></a>

```go
func FindingAggregatorArn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RegionLinkingModeInput`<sup>Optional</sup> <a name="RegionLinkingModeInput" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.property.regionLinkingModeInput"></a>

```go
func RegionLinkingModeInput() *string
```

- *Type:* *string

---

##### `RegionsInput`<sup>Optional</sup> <a name="RegionsInput" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.property.regionsInput"></a>

```go
func RegionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RegionLinkingMode`<sup>Required</sup> <a name="RegionLinkingMode" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.property.regionLinkingMode"></a>

```go
func RegionLinkingMode() *string
```

- *Type:* *string

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.property.regions"></a>

```go
func Regions() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregator.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityhubFindingAggregatorConfig <a name="SecurityhubFindingAggregatorConfig" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregatorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregatorConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityhubfindingaggregator"

&securityhubfindingaggregator.SecurityhubFindingAggregatorConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	RegionLinkingMode: *string,
	Regions: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregatorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregatorConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregatorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregatorConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregatorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregatorConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregatorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregatorConfig.property.regionLinkingMode">RegionLinkingMode</a></code> | <code>*string</code> | Indicates whether to aggregate findings from all of the available Regions in the current partition. |
| <code><a href="#@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregatorConfig.property.regions">Regions</a></code> | <code>*[]*string</code> | If ``RegionLinkingMode`` is ``ALL_REGIONS_EXCEPT_SPECIFIED``, then this is a space-separated list of Regions that do not aggregate findings to the aggregation Region. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregatorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregatorConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregatorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregatorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregatorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregatorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregatorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `RegionLinkingMode`<sup>Required</sup> <a name="RegionLinkingMode" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregatorConfig.property.regionLinkingMode"></a>

```go
RegionLinkingMode *string
```

- *Type:* *string

Indicates whether to aggregate findings from all of the available Regions in the current partition.

Also determines whether to automatically aggregate findings from new Regions as Security Hub supports them and you opt into them.
The selected option also determines how to use the Regions provided in the Regions list.
In CFN, the options for this property are as follows:

* `ALL_REGIONS` - Indicates to aggregate findings from all of the Regions where Security Hub is enabled. When you choose this option, Security Hub also automatically aggregates findings from new Regions as Security Hub supports them and you opt into them.
* `ALL_REGIONS_EXCEPT_SPECIFIED` - Indicates to aggregate findings from all of the Regions where Security Hub is enabled, except for the Regions listed in the `Regions` parameter. When you choose this option, Security Hub also automatically aggregates findings from new Regions as Security Hub supports them and you opt into them.
* `SPECIFIED_REGIONS` - Indicates to aggregate findings only from the Regions listed in the `Regions` parameter. Security Hub does not automatically aggregate findings from new Regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_finding_aggregator#region_linking_mode SecurityhubFindingAggregator#region_linking_mode}

---

##### `Regions`<sup>Optional</sup> <a name="Regions" id="@cdktn/provider-awscc.securityhubFindingAggregator.SecurityhubFindingAggregatorConfig.property.regions"></a>

```go
Regions *[]*string
```

- *Type:* *[]*string

If ``RegionLinkingMode`` is ``ALL_REGIONS_EXCEPT_SPECIFIED``, then this is a space-separated list of Regions that do not aggregate findings to the aggregation Region.

If `RegionLinkingMode` is `SPECIFIED_REGIONS`, then this is a space-separated list of Regions that do aggregate findings to the aggregation Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_finding_aggregator#regions SecurityhubFindingAggregator#regions}

---



