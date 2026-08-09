# `configConfigurationAggregator` Submodule <a name="`configConfigurationAggregator` Submodule" id="@cdktn/provider-awscc.configConfigurationAggregator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigConfigurationAggregator <a name="ConfigConfigurationAggregator" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_configuration_aggregator awscc_config_configuration_aggregator}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/configconfigurationaggregator"

configconfigurationaggregator.NewConfigConfigurationAggregator(scope Construct, id *string, config ConfigConfigurationAggregatorConfig) ConfigConfigurationAggregator
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig">ConfigConfigurationAggregatorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig">ConfigConfigurationAggregatorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.putAccountAggregationSources">PutAccountAggregationSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.putOrganizationAggregationSource">PutOrganizationAggregationSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.resetAccountAggregationSources">ResetAccountAggregationSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.resetConfigurationAggregatorName">ResetConfigurationAggregatorName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.resetOrganizationAggregationSource">ResetOrganizationAggregationSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccountAggregationSources` <a name="PutAccountAggregationSources" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.putAccountAggregationSources"></a>

```go
func PutAccountAggregationSources(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.putAccountAggregationSources.parameter.value"></a>

- *Type:* interface{}

---

##### `PutOrganizationAggregationSource` <a name="PutOrganizationAggregationSource" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.putOrganizationAggregationSource"></a>

```go
func PutOrganizationAggregationSource(value ConfigConfigurationAggregatorOrganizationAggregationSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.putOrganizationAggregationSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource">ConfigConfigurationAggregatorOrganizationAggregationSource</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccountAggregationSources` <a name="ResetAccountAggregationSources" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.resetAccountAggregationSources"></a>

```go
func ResetAccountAggregationSources()
```

##### `ResetConfigurationAggregatorName` <a name="ResetConfigurationAggregatorName" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.resetConfigurationAggregatorName"></a>

```go
func ResetConfigurationAggregatorName()
```

##### `ResetOrganizationAggregationSource` <a name="ResetOrganizationAggregationSource" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.resetOrganizationAggregationSource"></a>

```go
func ResetOrganizationAggregationSource()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ConfigConfigurationAggregator resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/configconfigurationaggregator"

configconfigurationaggregator.ConfigConfigurationAggregator_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/configconfigurationaggregator"

configconfigurationaggregator.ConfigConfigurationAggregator_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/configconfigurationaggregator"

configconfigurationaggregator.ConfigConfigurationAggregator_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/configconfigurationaggregator"

configconfigurationaggregator.ConfigConfigurationAggregator_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ConfigConfigurationAggregator resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ConfigConfigurationAggregator to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ConfigConfigurationAggregator that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_configuration_aggregator#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ConfigConfigurationAggregator to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.accountAggregationSources">AccountAggregationSources</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList">ConfigConfigurationAggregatorAccountAggregationSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.configurationAggregatorArn">ConfigurationAggregatorArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.organizationAggregationSource">OrganizationAggregationSource</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference">ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList">ConfigConfigurationAggregatorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.accountAggregationSourcesInput">AccountAggregationSourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.configurationAggregatorNameInput">ConfigurationAggregatorNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.organizationAggregationSourceInput">OrganizationAggregationSourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.configurationAggregatorName">ConfigurationAggregatorName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountAggregationSources`<sup>Required</sup> <a name="AccountAggregationSources" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.accountAggregationSources"></a>

```go
func AccountAggregationSources() ConfigConfigurationAggregatorAccountAggregationSourcesList
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList">ConfigConfigurationAggregatorAccountAggregationSourcesList</a>

---

##### `ConfigurationAggregatorArn`<sup>Required</sup> <a name="ConfigurationAggregatorArn" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.configurationAggregatorArn"></a>

```go
func ConfigurationAggregatorArn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OrganizationAggregationSource`<sup>Required</sup> <a name="OrganizationAggregationSource" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.organizationAggregationSource"></a>

```go
func OrganizationAggregationSource() ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference">ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.tags"></a>

```go
func Tags() ConfigConfigurationAggregatorTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList">ConfigConfigurationAggregatorTagsList</a>

---

##### `AccountAggregationSourcesInput`<sup>Optional</sup> <a name="AccountAggregationSourcesInput" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.accountAggregationSourcesInput"></a>

```go
func AccountAggregationSourcesInput() interface{}
```

- *Type:* interface{}

---

##### `ConfigurationAggregatorNameInput`<sup>Optional</sup> <a name="ConfigurationAggregatorNameInput" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.configurationAggregatorNameInput"></a>

```go
func ConfigurationAggregatorNameInput() *string
```

- *Type:* *string

---

##### `OrganizationAggregationSourceInput`<sup>Optional</sup> <a name="OrganizationAggregationSourceInput" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.organizationAggregationSourceInput"></a>

```go
func OrganizationAggregationSourceInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `ConfigurationAggregatorName`<sup>Required</sup> <a name="ConfigurationAggregatorName" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.configurationAggregatorName"></a>

```go
func ConfigurationAggregatorName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregator.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigConfigurationAggregatorAccountAggregationSources <a name="ConfigConfigurationAggregatorAccountAggregationSources" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSources.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/configconfigurationaggregator"

&configconfigurationaggregator.ConfigConfigurationAggregatorAccountAggregationSources {
	AccountIds: *[]*string,
	AllAwsRegions: interface{},
	AwsRegions: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSources.property.accountIds">AccountIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_configuration_aggregator#account_ids ConfigConfigurationAggregator#account_ids}. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSources.property.allAwsRegions">AllAwsRegions</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_configuration_aggregator#all_aws_regions ConfigConfigurationAggregator#all_aws_regions}. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSources.property.awsRegions">AwsRegions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_configuration_aggregator#aws_regions ConfigConfigurationAggregator#aws_regions}. |

---

##### `AccountIds`<sup>Optional</sup> <a name="AccountIds" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSources.property.accountIds"></a>

```go
AccountIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_configuration_aggregator#account_ids ConfigConfigurationAggregator#account_ids}.

---

##### `AllAwsRegions`<sup>Optional</sup> <a name="AllAwsRegions" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSources.property.allAwsRegions"></a>

```go
AllAwsRegions interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_configuration_aggregator#all_aws_regions ConfigConfigurationAggregator#all_aws_regions}.

---

##### `AwsRegions`<sup>Optional</sup> <a name="AwsRegions" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSources.property.awsRegions"></a>

```go
AwsRegions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_configuration_aggregator#aws_regions ConfigConfigurationAggregator#aws_regions}.

---

### ConfigConfigurationAggregatorConfig <a name="ConfigConfigurationAggregatorConfig" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/configconfigurationaggregator"

&configconfigurationaggregator.ConfigConfigurationAggregatorConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountAggregationSources: interface{},
	ConfigurationAggregatorName: *string,
	OrganizationAggregationSource: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.accountAggregationSources">AccountAggregationSources</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_configuration_aggregator#account_aggregation_sources ConfigConfigurationAggregator#account_aggregation_sources}. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.configurationAggregatorName">ConfigurationAggregatorName</a></code> | <code>*string</code> | The name of the aggregator. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.organizationAggregationSource">OrganizationAggregationSource</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource">ConfigConfigurationAggregatorOrganizationAggregationSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_configuration_aggregator#organization_aggregation_source ConfigConfigurationAggregator#organization_aggregation_source}. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The tags for the configuration aggregator. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountAggregationSources`<sup>Optional</sup> <a name="AccountAggregationSources" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.accountAggregationSources"></a>

```go
AccountAggregationSources interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_configuration_aggregator#account_aggregation_sources ConfigConfigurationAggregator#account_aggregation_sources}.

---

##### `ConfigurationAggregatorName`<sup>Optional</sup> <a name="ConfigurationAggregatorName" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.configurationAggregatorName"></a>

```go
ConfigurationAggregatorName *string
```

- *Type:* *string

The name of the aggregator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_configuration_aggregator#configuration_aggregator_name ConfigConfigurationAggregator#configuration_aggregator_name}

---

##### `OrganizationAggregationSource`<sup>Optional</sup> <a name="OrganizationAggregationSource" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.organizationAggregationSource"></a>

```go
OrganizationAggregationSource ConfigConfigurationAggregatorOrganizationAggregationSource
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource">ConfigConfigurationAggregatorOrganizationAggregationSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_configuration_aggregator#organization_aggregation_source ConfigConfigurationAggregator#organization_aggregation_source}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The tags for the configuration aggregator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_configuration_aggregator#tags ConfigConfigurationAggregator#tags}

---

### ConfigConfigurationAggregatorOrganizationAggregationSource <a name="ConfigConfigurationAggregatorOrganizationAggregationSource" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/configconfigurationaggregator"

&configconfigurationaggregator.ConfigConfigurationAggregatorOrganizationAggregationSource {
	AllAwsRegions: interface{},
	AwsRegions: *[]*string,
	RoleArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource.property.allAwsRegions">AllAwsRegions</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_configuration_aggregator#all_aws_regions ConfigConfigurationAggregator#all_aws_regions}. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource.property.awsRegions">AwsRegions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_configuration_aggregator#aws_regions ConfigConfigurationAggregator#aws_regions}. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_configuration_aggregator#role_arn ConfigConfigurationAggregator#role_arn}. |

---

##### `AllAwsRegions`<sup>Optional</sup> <a name="AllAwsRegions" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource.property.allAwsRegions"></a>

```go
AllAwsRegions interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_configuration_aggregator#all_aws_regions ConfigConfigurationAggregator#all_aws_regions}.

---

##### `AwsRegions`<sup>Optional</sup> <a name="AwsRegions" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource.property.awsRegions"></a>

```go
AwsRegions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_configuration_aggregator#aws_regions ConfigConfigurationAggregator#aws_regions}.

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSource.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_configuration_aggregator#role_arn ConfigConfigurationAggregator#role_arn}.

---

### ConfigConfigurationAggregatorTags <a name="ConfigConfigurationAggregatorTags" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/configconfigurationaggregator"

&configconfigurationaggregator.ConfigConfigurationAggregatorTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_configuration_aggregator#key ConfigConfigurationAggregator#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_configuration_aggregator#value ConfigConfigurationAggregator#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigConfigurationAggregatorAccountAggregationSourcesList <a name="ConfigConfigurationAggregatorAccountAggregationSourcesList" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/configconfigurationaggregator"

configconfigurationaggregator.NewConfigConfigurationAggregatorAccountAggregationSourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ConfigConfigurationAggregatorAccountAggregationSourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.get"></a>

```go
func Get(index *f64) ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference <a name="ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/configconfigurationaggregator"

configconfigurationaggregator.NewConfigConfigurationAggregatorAccountAggregationSourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.resetAccountIds">ResetAccountIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.resetAllAwsRegions">ResetAllAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.resetAwsRegions">ResetAwsRegions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccountIds` <a name="ResetAccountIds" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.resetAccountIds"></a>

```go
func ResetAccountIds()
```

##### `ResetAllAwsRegions` <a name="ResetAllAwsRegions" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.resetAllAwsRegions"></a>

```go
func ResetAllAwsRegions()
```

##### `ResetAwsRegions` <a name="ResetAwsRegions" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.resetAwsRegions"></a>

```go
func ResetAwsRegions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.property.accountIdsInput">AccountIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.property.allAwsRegionsInput">AllAwsRegionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.property.awsRegionsInput">AwsRegionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.property.accountIds">AccountIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.property.allAwsRegions">AllAwsRegions</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.property.awsRegions">AwsRegions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountIdsInput`<sup>Optional</sup> <a name="AccountIdsInput" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.property.accountIdsInput"></a>

```go
func AccountIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllAwsRegionsInput`<sup>Optional</sup> <a name="AllAwsRegionsInput" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.property.allAwsRegionsInput"></a>

```go
func AllAwsRegionsInput() interface{}
```

- *Type:* interface{}

---

##### `AwsRegionsInput`<sup>Optional</sup> <a name="AwsRegionsInput" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.property.awsRegionsInput"></a>

```go
func AwsRegionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AccountIds`<sup>Required</sup> <a name="AccountIds" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.property.accountIds"></a>

```go
func AccountIds() *[]*string
```

- *Type:* *[]*string

---

##### `AllAwsRegions`<sup>Required</sup> <a name="AllAwsRegions" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.property.allAwsRegions"></a>

```go
func AllAwsRegions() interface{}
```

- *Type:* interface{}

---

##### `AwsRegions`<sup>Required</sup> <a name="AwsRegions" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.property.awsRegions"></a>

```go
func AwsRegions() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorAccountAggregationSourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference <a name="ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/configconfigurationaggregator"

configconfigurationaggregator.NewConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.resetAllAwsRegions">ResetAllAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.resetAwsRegions">ResetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllAwsRegions` <a name="ResetAllAwsRegions" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.resetAllAwsRegions"></a>

```go
func ResetAllAwsRegions()
```

##### `ResetAwsRegions` <a name="ResetAwsRegions" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.resetAwsRegions"></a>

```go
func ResetAwsRegions()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.resetRoleArn"></a>

```go
func ResetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.allAwsRegionsInput">AllAwsRegionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.awsRegionsInput">AwsRegionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.allAwsRegions">AllAwsRegions</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.awsRegions">AwsRegions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllAwsRegionsInput`<sup>Optional</sup> <a name="AllAwsRegionsInput" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.allAwsRegionsInput"></a>

```go
func AllAwsRegionsInput() interface{}
```

- *Type:* interface{}

---

##### `AwsRegionsInput`<sup>Optional</sup> <a name="AwsRegionsInput" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.awsRegionsInput"></a>

```go
func AwsRegionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `AllAwsRegions`<sup>Required</sup> <a name="AllAwsRegions" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.allAwsRegions"></a>

```go
func AllAwsRegions() interface{}
```

- *Type:* interface{}

---

##### `AwsRegions`<sup>Required</sup> <a name="AwsRegions" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.awsRegions"></a>

```go
func AwsRegions() *[]*string
```

- *Type:* *[]*string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConfigConfigurationAggregatorTagsList <a name="ConfigConfigurationAggregatorTagsList" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/configconfigurationaggregator"

configconfigurationaggregator.NewConfigConfigurationAggregatorTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ConfigConfigurationAggregatorTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.get"></a>

```go
func Get(index *f64) ConfigConfigurationAggregatorTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConfigConfigurationAggregatorTagsOutputReference <a name="ConfigConfigurationAggregatorTagsOutputReference" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/configconfigurationaggregator"

configconfigurationaggregator.NewConfigConfigurationAggregatorTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ConfigConfigurationAggregatorTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.configConfigurationAggregator.ConfigConfigurationAggregatorTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



