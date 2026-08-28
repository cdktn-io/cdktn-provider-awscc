# `route53HealthCheck` Submodule <a name="`route53HealthCheck` Submodule" id="@cdktn/provider-awscc.route53HealthCheck"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53HealthCheck <a name="Route53HealthCheck" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_health_check awscc_route53_health_check}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53healthcheck"

route53healthcheck.NewRoute53HealthCheck(scope Construct, id *string, config Route53HealthCheckConfig) Route53HealthCheck
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig">Route53HealthCheckConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig">Route53HealthCheckConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.putHealthCheckConfig">PutHealthCheckConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.putHealthCheckTags">PutHealthCheckTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.resetHealthCheckTags">ResetHealthCheckTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutHealthCheckConfig` <a name="PutHealthCheckConfig" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.putHealthCheckConfig"></a>

```go
func PutHealthCheckConfig(value Route53HealthCheckHealthCheckConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.putHealthCheckConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig">Route53HealthCheckHealthCheckConfig</a>

---

##### `PutHealthCheckTags` <a name="PutHealthCheckTags" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.putHealthCheckTags"></a>

```go
func PutHealthCheckTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.putHealthCheckTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetHealthCheckTags` <a name="ResetHealthCheckTags" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.resetHealthCheckTags"></a>

```go
func ResetHealthCheckTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Route53HealthCheck resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53healthcheck"

route53healthcheck.Route53HealthCheck_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53healthcheck"

route53healthcheck.Route53HealthCheck_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53healthcheck"

route53healthcheck.Route53HealthCheck_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53healthcheck"

route53healthcheck.Route53HealthCheck_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Route53HealthCheck resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Route53HealthCheck to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Route53HealthCheck that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_health_check#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Route53HealthCheck to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.healthCheckConfig">HealthCheckConfig</a></code> | <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference">Route53HealthCheckHealthCheckConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.healthCheckId">HealthCheckId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.healthCheckTags">HealthCheckTags</a></code> | <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList">Route53HealthCheckHealthCheckTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.healthCheckConfigInput">HealthCheckConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.healthCheckTagsInput">HealthCheckTagsInput</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `HealthCheckConfig`<sup>Required</sup> <a name="HealthCheckConfig" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.healthCheckConfig"></a>

```go
func HealthCheckConfig() Route53HealthCheckHealthCheckConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference">Route53HealthCheckHealthCheckConfigOutputReference</a>

---

##### `HealthCheckId`<sup>Required</sup> <a name="HealthCheckId" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.healthCheckId"></a>

```go
func HealthCheckId() *string
```

- *Type:* *string

---

##### `HealthCheckTags`<sup>Required</sup> <a name="HealthCheckTags" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.healthCheckTags"></a>

```go
func HealthCheckTags() Route53HealthCheckHealthCheckTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList">Route53HealthCheckHealthCheckTagsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `HealthCheckConfigInput`<sup>Optional</sup> <a name="HealthCheckConfigInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.healthCheckConfigInput"></a>

```go
func HealthCheckConfigInput() interface{}
```

- *Type:* interface{}

---

##### `HealthCheckTagsInput`<sup>Optional</sup> <a name="HealthCheckTagsInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.healthCheckTagsInput"></a>

```go
func HealthCheckTagsInput() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheck.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53HealthCheckConfig <a name="Route53HealthCheckConfig" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53healthcheck"

&route53healthcheck.Route53HealthCheckConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	HealthCheckConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig,
	HealthCheckTags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.healthCheckConfig">HealthCheckConfig</a></code> | <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig">Route53HealthCheckHealthCheckConfig</a></code> | A complex type that contains information about the health check. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.healthCheckTags">HealthCheckTags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `HealthCheckConfig`<sup>Required</sup> <a name="HealthCheckConfig" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.healthCheckConfig"></a>

```go
HealthCheckConfig Route53HealthCheckHealthCheckConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig">Route53HealthCheckHealthCheckConfig</a>

A complex type that contains information about the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_health_check#health_check_config Route53HealthCheck#health_check_config}

---

##### `HealthCheckTags`<sup>Optional</sup> <a name="HealthCheckTags" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckConfig.property.healthCheckTags"></a>

```go
HealthCheckTags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_health_check#health_check_tags Route53HealthCheck#health_check_tags}

---

### Route53HealthCheckHealthCheckConfig <a name="Route53HealthCheckHealthCheckConfig" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53healthcheck"

&route53healthcheck.Route53HealthCheckHealthCheckConfig {
	Type: *string,
	AlarmIdentifier: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifier,
	ChildHealthChecks: *[]*string,
	EnableSni: interface{},
	FailureThreshold: *f64,
	FullyQualifiedDomainName: *string,
	HealthThreshold: *f64,
	InsufficientDataHealthStatus: *string,
	Inverted: interface{},
	IpAddress: *string,
	MeasureLatency: interface{},
	Port: *f64,
	Regions: *[]*string,
	RequestInterval: *f64,
	ResourcePath: *string,
	RoutingControlArn: *string,
	SearchString: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_health_check#type Route53HealthCheck#type}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.alarmIdentifier">AlarmIdentifier</a></code> | <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifier">Route53HealthCheckHealthCheckConfigAlarmIdentifier</a></code> | A complex type that identifies the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether the specified health check is healthy. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.childHealthChecks">ChildHealthChecks</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_health_check#child_health_checks Route53HealthCheck#child_health_checks}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.enableSni">EnableSni</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_health_check#enable_sni Route53HealthCheck#enable_sni}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.failureThreshold">FailureThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_health_check#failure_threshold Route53HealthCheck#failure_threshold}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.fullyQualifiedDomainName">FullyQualifiedDomainName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_health_check#fully_qualified_domain_name Route53HealthCheck#fully_qualified_domain_name}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.healthThreshold">HealthThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_health_check#health_threshold Route53HealthCheck#health_threshold}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.insufficientDataHealthStatus">InsufficientDataHealthStatus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_health_check#insufficient_data_health_status Route53HealthCheck#insufficient_data_health_status}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.inverted">Inverted</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_health_check#inverted Route53HealthCheck#inverted}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.ipAddress">IpAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_health_check#ip_address Route53HealthCheck#ip_address}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.measureLatency">MeasureLatency</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_health_check#measure_latency Route53HealthCheck#measure_latency}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_health_check#port Route53HealthCheck#port}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.regions">Regions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_health_check#regions Route53HealthCheck#regions}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.requestInterval">RequestInterval</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_health_check#request_interval Route53HealthCheck#request_interval}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.resourcePath">ResourcePath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_health_check#resource_path Route53HealthCheck#resource_path}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.routingControlArn">RoutingControlArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_health_check#routing_control_arn Route53HealthCheck#routing_control_arn}. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.searchString">SearchString</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_health_check#search_string Route53HealthCheck#search_string}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_health_check#type Route53HealthCheck#type}.

---

##### `AlarmIdentifier`<sup>Optional</sup> <a name="AlarmIdentifier" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.alarmIdentifier"></a>

```go
AlarmIdentifier Route53HealthCheckHealthCheckConfigAlarmIdentifier
```

- *Type:* <a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifier">Route53HealthCheckHealthCheckConfigAlarmIdentifier</a>

A complex type that identifies the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether the specified health check is healthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_health_check#alarm_identifier Route53HealthCheck#alarm_identifier}

---

##### `ChildHealthChecks`<sup>Optional</sup> <a name="ChildHealthChecks" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.childHealthChecks"></a>

```go
ChildHealthChecks *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_health_check#child_health_checks Route53HealthCheck#child_health_checks}.

---

##### `EnableSni`<sup>Optional</sup> <a name="EnableSni" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.enableSni"></a>

```go
EnableSni interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_health_check#enable_sni Route53HealthCheck#enable_sni}.

---

##### `FailureThreshold`<sup>Optional</sup> <a name="FailureThreshold" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.failureThreshold"></a>

```go
FailureThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_health_check#failure_threshold Route53HealthCheck#failure_threshold}.

---

##### `FullyQualifiedDomainName`<sup>Optional</sup> <a name="FullyQualifiedDomainName" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.fullyQualifiedDomainName"></a>

```go
FullyQualifiedDomainName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_health_check#fully_qualified_domain_name Route53HealthCheck#fully_qualified_domain_name}.

---

##### `HealthThreshold`<sup>Optional</sup> <a name="HealthThreshold" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.healthThreshold"></a>

```go
HealthThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_health_check#health_threshold Route53HealthCheck#health_threshold}.

---

##### `InsufficientDataHealthStatus`<sup>Optional</sup> <a name="InsufficientDataHealthStatus" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.insufficientDataHealthStatus"></a>

```go
InsufficientDataHealthStatus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_health_check#insufficient_data_health_status Route53HealthCheck#insufficient_data_health_status}.

---

##### `Inverted`<sup>Optional</sup> <a name="Inverted" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.inverted"></a>

```go
Inverted interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_health_check#inverted Route53HealthCheck#inverted}.

---

##### `IpAddress`<sup>Optional</sup> <a name="IpAddress" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.ipAddress"></a>

```go
IpAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_health_check#ip_address Route53HealthCheck#ip_address}.

---

##### `MeasureLatency`<sup>Optional</sup> <a name="MeasureLatency" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.measureLatency"></a>

```go
MeasureLatency interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_health_check#measure_latency Route53HealthCheck#measure_latency}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_health_check#port Route53HealthCheck#port}.

---

##### `Regions`<sup>Optional</sup> <a name="Regions" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.regions"></a>

```go
Regions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_health_check#regions Route53HealthCheck#regions}.

---

##### `RequestInterval`<sup>Optional</sup> <a name="RequestInterval" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.requestInterval"></a>

```go
RequestInterval *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_health_check#request_interval Route53HealthCheck#request_interval}.

---

##### `ResourcePath`<sup>Optional</sup> <a name="ResourcePath" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.resourcePath"></a>

```go
ResourcePath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_health_check#resource_path Route53HealthCheck#resource_path}.

---

##### `RoutingControlArn`<sup>Optional</sup> <a name="RoutingControlArn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.routingControlArn"></a>

```go
RoutingControlArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_health_check#routing_control_arn Route53HealthCheck#routing_control_arn}.

---

##### `SearchString`<sup>Optional</sup> <a name="SearchString" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfig.property.searchString"></a>

```go
SearchString *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_health_check#search_string Route53HealthCheck#search_string}.

---

### Route53HealthCheckHealthCheckConfigAlarmIdentifier <a name="Route53HealthCheckHealthCheckConfigAlarmIdentifier" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifier"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifier.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53healthcheck"

&route53healthcheck.Route53HealthCheckHealthCheckConfigAlarmIdentifier {
	Name: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifier.property.name">Name</a></code> | <code>*string</code> | The name of the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether this health check is healthy. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifier.property.region">Region</a></code> | <code>*string</code> | For the CloudWatch alarm that you want Route 53 health checkers to use to determine whether this health check is healthy, the region that the alarm was created in. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifier.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether this health check is healthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_health_check#name Route53HealthCheck#name}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifier.property.region"></a>

```go
Region *string
```

- *Type:* *string

For the CloudWatch alarm that you want Route 53 health checkers to use to determine whether this health check is healthy, the region that the alarm was created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_health_check#region Route53HealthCheck#region}

---

### Route53HealthCheckHealthCheckTags <a name="Route53HealthCheckHealthCheckTags" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53healthcheck"

&route53healthcheck.Route53HealthCheckHealthCheckTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_health_check#key Route53HealthCheck#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53_health_check#value Route53HealthCheck#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference <a name="Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53healthcheck"

route53healthcheck.NewRoute53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.resetRegion"></a>

```go
func ResetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Route53HealthCheckHealthCheckConfigOutputReference <a name="Route53HealthCheckHealthCheckConfigOutputReference" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53healthcheck"

route53healthcheck.NewRoute53HealthCheckHealthCheckConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Route53HealthCheckHealthCheckConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.putAlarmIdentifier">PutAlarmIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetAlarmIdentifier">ResetAlarmIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetChildHealthChecks">ResetChildHealthChecks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetEnableSni">ResetEnableSni</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetFailureThreshold">ResetFailureThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetFullyQualifiedDomainName">ResetFullyQualifiedDomainName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetHealthThreshold">ResetHealthThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetInsufficientDataHealthStatus">ResetInsufficientDataHealthStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetInverted">ResetInverted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetIpAddress">ResetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetMeasureLatency">ResetMeasureLatency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetRegions">ResetRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetRequestInterval">ResetRequestInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetResourcePath">ResetResourcePath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetRoutingControlArn">ResetRoutingControlArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetSearchString">ResetSearchString</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAlarmIdentifier` <a name="PutAlarmIdentifier" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.putAlarmIdentifier"></a>

```go
func PutAlarmIdentifier(value Route53HealthCheckHealthCheckConfigAlarmIdentifier)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.putAlarmIdentifier.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifier">Route53HealthCheckHealthCheckConfigAlarmIdentifier</a>

---

##### `ResetAlarmIdentifier` <a name="ResetAlarmIdentifier" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetAlarmIdentifier"></a>

```go
func ResetAlarmIdentifier()
```

##### `ResetChildHealthChecks` <a name="ResetChildHealthChecks" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetChildHealthChecks"></a>

```go
func ResetChildHealthChecks()
```

##### `ResetEnableSni` <a name="ResetEnableSni" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetEnableSni"></a>

```go
func ResetEnableSni()
```

##### `ResetFailureThreshold` <a name="ResetFailureThreshold" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetFailureThreshold"></a>

```go
func ResetFailureThreshold()
```

##### `ResetFullyQualifiedDomainName` <a name="ResetFullyQualifiedDomainName" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetFullyQualifiedDomainName"></a>

```go
func ResetFullyQualifiedDomainName()
```

##### `ResetHealthThreshold` <a name="ResetHealthThreshold" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetHealthThreshold"></a>

```go
func ResetHealthThreshold()
```

##### `ResetInsufficientDataHealthStatus` <a name="ResetInsufficientDataHealthStatus" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetInsufficientDataHealthStatus"></a>

```go
func ResetInsufficientDataHealthStatus()
```

##### `ResetInverted` <a name="ResetInverted" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetInverted"></a>

```go
func ResetInverted()
```

##### `ResetIpAddress` <a name="ResetIpAddress" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetIpAddress"></a>

```go
func ResetIpAddress()
```

##### `ResetMeasureLatency` <a name="ResetMeasureLatency" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetMeasureLatency"></a>

```go
func ResetMeasureLatency()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetRegions` <a name="ResetRegions" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetRegions"></a>

```go
func ResetRegions()
```

##### `ResetRequestInterval` <a name="ResetRequestInterval" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetRequestInterval"></a>

```go
func ResetRequestInterval()
```

##### `ResetResourcePath` <a name="ResetResourcePath" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetResourcePath"></a>

```go
func ResetResourcePath()
```

##### `ResetRoutingControlArn` <a name="ResetRoutingControlArn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetRoutingControlArn"></a>

```go
func ResetRoutingControlArn()
```

##### `ResetSearchString` <a name="ResetSearchString" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.resetSearchString"></a>

```go
func ResetSearchString()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.alarmIdentifier">AlarmIdentifier</a></code> | <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference">Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.alarmIdentifierInput">AlarmIdentifierInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.childHealthChecksInput">ChildHealthChecksInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.enableSniInput">EnableSniInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.failureThresholdInput">FailureThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.fullyQualifiedDomainNameInput">FullyQualifiedDomainNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.healthThresholdInput">HealthThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.insufficientDataHealthStatusInput">InsufficientDataHealthStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.invertedInput">InvertedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.ipAddressInput">IpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.measureLatencyInput">MeasureLatencyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.regionsInput">RegionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.requestIntervalInput">RequestIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.resourcePathInput">ResourcePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.routingControlArnInput">RoutingControlArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.searchStringInput">SearchStringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.childHealthChecks">ChildHealthChecks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.enableSni">EnableSni</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.failureThreshold">FailureThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.fullyQualifiedDomainName">FullyQualifiedDomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.healthThreshold">HealthThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.insufficientDataHealthStatus">InsufficientDataHealthStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.inverted">Inverted</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.measureLatency">MeasureLatency</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.regions">Regions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.requestInterval">RequestInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.resourcePath">ResourcePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.routingControlArn">RoutingControlArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.searchString">SearchString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlarmIdentifier`<sup>Required</sup> <a name="AlarmIdentifier" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.alarmIdentifier"></a>

```go
func AlarmIdentifier() Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference">Route53HealthCheckHealthCheckConfigAlarmIdentifierOutputReference</a>

---

##### `AlarmIdentifierInput`<sup>Optional</sup> <a name="AlarmIdentifierInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.alarmIdentifierInput"></a>

```go
func AlarmIdentifierInput() interface{}
```

- *Type:* interface{}

---

##### `ChildHealthChecksInput`<sup>Optional</sup> <a name="ChildHealthChecksInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.childHealthChecksInput"></a>

```go
func ChildHealthChecksInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnableSniInput`<sup>Optional</sup> <a name="EnableSniInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.enableSniInput"></a>

```go
func EnableSniInput() interface{}
```

- *Type:* interface{}

---

##### `FailureThresholdInput`<sup>Optional</sup> <a name="FailureThresholdInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.failureThresholdInput"></a>

```go
func FailureThresholdInput() *f64
```

- *Type:* *f64

---

##### `FullyQualifiedDomainNameInput`<sup>Optional</sup> <a name="FullyQualifiedDomainNameInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.fullyQualifiedDomainNameInput"></a>

```go
func FullyQualifiedDomainNameInput() *string
```

- *Type:* *string

---

##### `HealthThresholdInput`<sup>Optional</sup> <a name="HealthThresholdInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.healthThresholdInput"></a>

```go
func HealthThresholdInput() *f64
```

- *Type:* *f64

---

##### `InsufficientDataHealthStatusInput`<sup>Optional</sup> <a name="InsufficientDataHealthStatusInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.insufficientDataHealthStatusInput"></a>

```go
func InsufficientDataHealthStatusInput() *string
```

- *Type:* *string

---

##### `InvertedInput`<sup>Optional</sup> <a name="InvertedInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.invertedInput"></a>

```go
func InvertedInput() interface{}
```

- *Type:* interface{}

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.ipAddressInput"></a>

```go
func IpAddressInput() *string
```

- *Type:* *string

---

##### `MeasureLatencyInput`<sup>Optional</sup> <a name="MeasureLatencyInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.measureLatencyInput"></a>

```go
func MeasureLatencyInput() interface{}
```

- *Type:* interface{}

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `RegionsInput`<sup>Optional</sup> <a name="RegionsInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.regionsInput"></a>

```go
func RegionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RequestIntervalInput`<sup>Optional</sup> <a name="RequestIntervalInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.requestIntervalInput"></a>

```go
func RequestIntervalInput() *f64
```

- *Type:* *f64

---

##### `ResourcePathInput`<sup>Optional</sup> <a name="ResourcePathInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.resourcePathInput"></a>

```go
func ResourcePathInput() *string
```

- *Type:* *string

---

##### `RoutingControlArnInput`<sup>Optional</sup> <a name="RoutingControlArnInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.routingControlArnInput"></a>

```go
func RoutingControlArnInput() *string
```

- *Type:* *string

---

##### `SearchStringInput`<sup>Optional</sup> <a name="SearchStringInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.searchStringInput"></a>

```go
func SearchStringInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ChildHealthChecks`<sup>Required</sup> <a name="ChildHealthChecks" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.childHealthChecks"></a>

```go
func ChildHealthChecks() *[]*string
```

- *Type:* *[]*string

---

##### `EnableSni`<sup>Required</sup> <a name="EnableSni" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.enableSni"></a>

```go
func EnableSni() interface{}
```

- *Type:* interface{}

---

##### `FailureThreshold`<sup>Required</sup> <a name="FailureThreshold" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.failureThreshold"></a>

```go
func FailureThreshold() *f64
```

- *Type:* *f64

---

##### `FullyQualifiedDomainName`<sup>Required</sup> <a name="FullyQualifiedDomainName" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.fullyQualifiedDomainName"></a>

```go
func FullyQualifiedDomainName() *string
```

- *Type:* *string

---

##### `HealthThreshold`<sup>Required</sup> <a name="HealthThreshold" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.healthThreshold"></a>

```go
func HealthThreshold() *f64
```

- *Type:* *f64

---

##### `InsufficientDataHealthStatus`<sup>Required</sup> <a name="InsufficientDataHealthStatus" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.insufficientDataHealthStatus"></a>

```go
func InsufficientDataHealthStatus() *string
```

- *Type:* *string

---

##### `Inverted`<sup>Required</sup> <a name="Inverted" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.inverted"></a>

```go
func Inverted() interface{}
```

- *Type:* interface{}

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `MeasureLatency`<sup>Required</sup> <a name="MeasureLatency" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.measureLatency"></a>

```go
func MeasureLatency() interface{}
```

- *Type:* interface{}

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.regions"></a>

```go
func Regions() *[]*string
```

- *Type:* *[]*string

---

##### `RequestInterval`<sup>Required</sup> <a name="RequestInterval" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.requestInterval"></a>

```go
func RequestInterval() *f64
```

- *Type:* *f64

---

##### `ResourcePath`<sup>Required</sup> <a name="ResourcePath" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.resourcePath"></a>

```go
func ResourcePath() *string
```

- *Type:* *string

---

##### `RoutingControlArn`<sup>Required</sup> <a name="RoutingControlArn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.routingControlArn"></a>

```go
func RoutingControlArn() *string
```

- *Type:* *string

---

##### `SearchString`<sup>Required</sup> <a name="SearchString" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.searchString"></a>

```go
func SearchString() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Route53HealthCheckHealthCheckTagsList <a name="Route53HealthCheckHealthCheckTagsList" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53healthcheck"

route53healthcheck.NewRoute53HealthCheckHealthCheckTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Route53HealthCheckHealthCheckTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.get"></a>

```go
func Get(index *f64) Route53HealthCheckHealthCheckTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Route53HealthCheckHealthCheckTagsOutputReference <a name="Route53HealthCheckHealthCheckTagsOutputReference" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53healthcheck"

route53healthcheck.NewRoute53HealthCheckHealthCheckTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Route53HealthCheckHealthCheckTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53HealthCheck.Route53HealthCheckHealthCheckTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



