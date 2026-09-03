# `elasticbeanstalkApplication` Submodule <a name="`elasticbeanstalkApplication` Submodule" id="@cdktn/provider-awscc.elasticbeanstalkApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticbeanstalkApplication <a name="ElasticbeanstalkApplication" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticbeanstalk_application awscc_elasticbeanstalk_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticbeanstalkapplication"

elasticbeanstalkapplication.NewElasticbeanstalkApplication(scope Construct, id *string, config ElasticbeanstalkApplicationConfig) ElasticbeanstalkApplication
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationConfig">ElasticbeanstalkApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationConfig">ElasticbeanstalkApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.putResourceLifecycleConfig">PutResourceLifecycleConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.resetApplicationName">ResetApplicationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.resetResourceLifecycleConfig">ResetResourceLifecycleConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutResourceLifecycleConfig` <a name="PutResourceLifecycleConfig" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.putResourceLifecycleConfig"></a>

```go
func PutResourceLifecycleConfig(value ElasticbeanstalkApplicationResourceLifecycleConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.putResourceLifecycleConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfig">ElasticbeanstalkApplicationResourceLifecycleConfig</a>

---

##### `ResetApplicationName` <a name="ResetApplicationName" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.resetApplicationName"></a>

```go
func ResetApplicationName()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetResourceLifecycleConfig` <a name="ResetResourceLifecycleConfig" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.resetResourceLifecycleConfig"></a>

```go
func ResetResourceLifecycleConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ElasticbeanstalkApplication resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticbeanstalkapplication"

elasticbeanstalkapplication.ElasticbeanstalkApplication_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticbeanstalkapplication"

elasticbeanstalkapplication.ElasticbeanstalkApplication_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticbeanstalkapplication"

elasticbeanstalkapplication.ElasticbeanstalkApplication_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticbeanstalkapplication"

elasticbeanstalkapplication.ElasticbeanstalkApplication_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ElasticbeanstalkApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ElasticbeanstalkApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ElasticbeanstalkApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticbeanstalk_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ElasticbeanstalkApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.resourceLifecycleConfig">ResourceLifecycleConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference">ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.applicationNameInput">ApplicationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.resourceLifecycleConfigInput">ResourceLifecycleConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.applicationName">ApplicationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.description">Description</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ResourceLifecycleConfig`<sup>Required</sup> <a name="ResourceLifecycleConfig" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.resourceLifecycleConfig"></a>

```go
func ResourceLifecycleConfig() ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference">ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference</a>

---

##### `ApplicationNameInput`<sup>Optional</sup> <a name="ApplicationNameInput" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.applicationNameInput"></a>

```go
func ApplicationNameInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ResourceLifecycleConfigInput`<sup>Optional</sup> <a name="ResourceLifecycleConfigInput" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.resourceLifecycleConfigInput"></a>

```go
func ResourceLifecycleConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ApplicationName`<sup>Required</sup> <a name="ApplicationName" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.applicationName"></a>

```go
func ApplicationName() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticbeanstalkApplicationConfig <a name="ElasticbeanstalkApplicationConfig" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticbeanstalkapplication"

&elasticbeanstalkapplication.ElasticbeanstalkApplicationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ApplicationName: *string,
	Description: *string,
	ResourceLifecycleConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationConfig.property.applicationName">ApplicationName</a></code> | <code>*string</code> | A name for the Elastic Beanstalk application. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationConfig.property.description">Description</a></code> | <code>*string</code> | Your description of the application. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationConfig.property.resourceLifecycleConfig">ResourceLifecycleConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfig">ElasticbeanstalkApplicationResourceLifecycleConfig</a></code> | Specifies an application resource lifecycle configuration to prevent your application from accumulating too many versions. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApplicationName`<sup>Optional</sup> <a name="ApplicationName" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationConfig.property.applicationName"></a>

```go
ApplicationName *string
```

- *Type:* *string

A name for the Elastic Beanstalk application.

If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the application name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticbeanstalk_application#application_name ElasticbeanstalkApplication#application_name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Your description of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticbeanstalk_application#description ElasticbeanstalkApplication#description}

---

##### `ResourceLifecycleConfig`<sup>Optional</sup> <a name="ResourceLifecycleConfig" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationConfig.property.resourceLifecycleConfig"></a>

```go
ResourceLifecycleConfig ElasticbeanstalkApplicationResourceLifecycleConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfig">ElasticbeanstalkApplicationResourceLifecycleConfig</a>

Specifies an application resource lifecycle configuration to prevent your application from accumulating too many versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticbeanstalk_application#resource_lifecycle_config ElasticbeanstalkApplication#resource_lifecycle_config}

---

### ElasticbeanstalkApplicationResourceLifecycleConfig <a name="ElasticbeanstalkApplicationResourceLifecycleConfig" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticbeanstalkapplication"

&elasticbeanstalkapplication.ElasticbeanstalkApplicationResourceLifecycleConfig {
	ServiceRole: *string,
	VersionLifecycleConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfig.property.serviceRole">ServiceRole</a></code> | <code>*string</code> | The ARN of an IAM service role that Elastic Beanstalk has permission to assume. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfig.property.versionLifecycleConfig">VersionLifecycleConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig">ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig</a></code> | Defines lifecycle settings for application versions. |

---

##### `ServiceRole`<sup>Optional</sup> <a name="ServiceRole" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfig.property.serviceRole"></a>

```go
ServiceRole *string
```

- *Type:* *string

The ARN of an IAM service role that Elastic Beanstalk has permission to assume.

The ServiceRole property is required the first time that you provide a ResourceLifecycleConfig for the application. After you provide it once, Elastic Beanstalk persists the Service Role with the application, and you don't need to specify it again. You can, however, specify it in subsequent updates to change the Service Role to another value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticbeanstalk_application#service_role ElasticbeanstalkApplication#service_role}

---

##### `VersionLifecycleConfig`<sup>Optional</sup> <a name="VersionLifecycleConfig" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfig.property.versionLifecycleConfig"></a>

```go
VersionLifecycleConfig ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig">ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig</a>

Defines lifecycle settings for application versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticbeanstalk_application#version_lifecycle_config ElasticbeanstalkApplication#version_lifecycle_config}

---

### ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig <a name="ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticbeanstalkapplication"

&elasticbeanstalkapplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig {
	MaxAgeRule: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule,
	MaxCountRule: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig.property.maxAgeRule">MaxAgeRule</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule">ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule</a></code> | Specify a max age rule to restrict the length of time that application versions are retained for an application. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig.property.maxCountRule">MaxCountRule</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule">ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule</a></code> | Specify a max count rule to restrict the number of application versions that are retained for an application. |

---

##### `MaxAgeRule`<sup>Optional</sup> <a name="MaxAgeRule" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig.property.maxAgeRule"></a>

```go
MaxAgeRule ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule">ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule</a>

Specify a max age rule to restrict the length of time that application versions are retained for an application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticbeanstalk_application#max_age_rule ElasticbeanstalkApplication#max_age_rule}

---

##### `MaxCountRule`<sup>Optional</sup> <a name="MaxCountRule" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig.property.maxCountRule"></a>

```go
MaxCountRule ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule">ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule</a>

Specify a max count rule to restrict the number of application versions that are retained for an application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticbeanstalk_application#max_count_rule ElasticbeanstalkApplication#max_count_rule}

---

### ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule <a name="ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticbeanstalkapplication"

&elasticbeanstalkapplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule {
	DeleteSourceFromS3: interface{},
	Enabled: interface{},
	MaxAgeInDays: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule.property.deleteSourceFromS3">DeleteSourceFromS3</a></code> | <code>interface{}</code> | Set to true to delete a version's source bundle from Amazon S3 when Elastic Beanstalk deletes the application version. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule.property.enabled">Enabled</a></code> | <code>interface{}</code> | Specify true to apply the rule, or false to disable it. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule.property.maxAgeInDays">MaxAgeInDays</a></code> | <code>*f64</code> | Specify the number of days to retain an application versions. |

---

##### `DeleteSourceFromS3`<sup>Optional</sup> <a name="DeleteSourceFromS3" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule.property.deleteSourceFromS3"></a>

```go
DeleteSourceFromS3 interface{}
```

- *Type:* interface{}

Set to true to delete a version's source bundle from Amazon S3 when Elastic Beanstalk deletes the application version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticbeanstalk_application#delete_source_from_s3 ElasticbeanstalkApplication#delete_source_from_s3}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Specify true to apply the rule, or false to disable it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticbeanstalk_application#enabled ElasticbeanstalkApplication#enabled}

---

##### `MaxAgeInDays`<sup>Optional</sup> <a name="MaxAgeInDays" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule.property.maxAgeInDays"></a>

```go
MaxAgeInDays *f64
```

- *Type:* *f64

Specify the number of days to retain an application versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticbeanstalk_application#max_age_in_days ElasticbeanstalkApplication#max_age_in_days}

---

### ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule <a name="ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticbeanstalkapplication"

&elasticbeanstalkapplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule {
	DeleteSourceFromS3: interface{},
	Enabled: interface{},
	MaxCount: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule.property.deleteSourceFromS3">DeleteSourceFromS3</a></code> | <code>interface{}</code> | Set to true to delete a version's source bundle from Amazon S3 when Elastic Beanstalk deletes the application version. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule.property.enabled">Enabled</a></code> | <code>interface{}</code> | Specify true to apply the rule, or false to disable it. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule.property.maxCount">MaxCount</a></code> | <code>*f64</code> | Specify the maximum number of application versions to retain. |

---

##### `DeleteSourceFromS3`<sup>Optional</sup> <a name="DeleteSourceFromS3" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule.property.deleteSourceFromS3"></a>

```go
DeleteSourceFromS3 interface{}
```

- *Type:* interface{}

Set to true to delete a version's source bundle from Amazon S3 when Elastic Beanstalk deletes the application version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticbeanstalk_application#delete_source_from_s3 ElasticbeanstalkApplication#delete_source_from_s3}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Specify true to apply the rule, or false to disable it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticbeanstalk_application#enabled ElasticbeanstalkApplication#enabled}

---

##### `MaxCount`<sup>Optional</sup> <a name="MaxCount" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule.property.maxCount"></a>

```go
MaxCount *f64
```

- *Type:* *f64

Specify the maximum number of application versions to retain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/elasticbeanstalk_application#max_count ElasticbeanstalkApplication#max_count}

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference <a name="ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticbeanstalkapplication"

elasticbeanstalkapplication.NewElasticbeanstalkApplicationResourceLifecycleConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.putVersionLifecycleConfig">PutVersionLifecycleConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.resetServiceRole">ResetServiceRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.resetVersionLifecycleConfig">ResetVersionLifecycleConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVersionLifecycleConfig` <a name="PutVersionLifecycleConfig" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.putVersionLifecycleConfig"></a>

```go
func PutVersionLifecycleConfig(value ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.putVersionLifecycleConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig">ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig</a>

---

##### `ResetServiceRole` <a name="ResetServiceRole" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.resetServiceRole"></a>

```go
func ResetServiceRole()
```

##### `ResetVersionLifecycleConfig` <a name="ResetVersionLifecycleConfig" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.resetVersionLifecycleConfig"></a>

```go
func ResetVersionLifecycleConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.property.versionLifecycleConfig">VersionLifecycleConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference">ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.property.serviceRoleInput">ServiceRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.property.versionLifecycleConfigInput">VersionLifecycleConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.property.serviceRole">ServiceRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VersionLifecycleConfig`<sup>Required</sup> <a name="VersionLifecycleConfig" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.property.versionLifecycleConfig"></a>

```go
func VersionLifecycleConfig() ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference">ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference</a>

---

##### `ServiceRoleInput`<sup>Optional</sup> <a name="ServiceRoleInput" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.property.serviceRoleInput"></a>

```go
func ServiceRoleInput() *string
```

- *Type:* *string

---

##### `VersionLifecycleConfigInput`<sup>Optional</sup> <a name="VersionLifecycleConfigInput" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.property.versionLifecycleConfigInput"></a>

```go
func VersionLifecycleConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceRole`<sup>Required</sup> <a name="ServiceRole" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.property.serviceRole"></a>

```go
func ServiceRole() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference <a name="ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticbeanstalkapplication"

elasticbeanstalkapplication.NewElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.resetDeleteSourceFromS3">ResetDeleteSourceFromS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.resetMaxAgeInDays">ResetMaxAgeInDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeleteSourceFromS3` <a name="ResetDeleteSourceFromS3" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.resetDeleteSourceFromS3"></a>

```go
func ResetDeleteSourceFromS3()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetMaxAgeInDays` <a name="ResetMaxAgeInDays" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.resetMaxAgeInDays"></a>

```go
func ResetMaxAgeInDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.property.deleteSourceFromS3Input">DeleteSourceFromS3Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.property.maxAgeInDaysInput">MaxAgeInDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.property.deleteSourceFromS3">DeleteSourceFromS3</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.property.maxAgeInDays">MaxAgeInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeleteSourceFromS3Input`<sup>Optional</sup> <a name="DeleteSourceFromS3Input" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.property.deleteSourceFromS3Input"></a>

```go
func DeleteSourceFromS3Input() interface{}
```

- *Type:* interface{}

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `MaxAgeInDaysInput`<sup>Optional</sup> <a name="MaxAgeInDaysInput" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.property.maxAgeInDaysInput"></a>

```go
func MaxAgeInDaysInput() *f64
```

- *Type:* *f64

---

##### `DeleteSourceFromS3`<sup>Required</sup> <a name="DeleteSourceFromS3" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.property.deleteSourceFromS3"></a>

```go
func DeleteSourceFromS3() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `MaxAgeInDays`<sup>Required</sup> <a name="MaxAgeInDays" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.property.maxAgeInDays"></a>

```go
func MaxAgeInDays() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference <a name="ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticbeanstalkapplication"

elasticbeanstalkapplication.NewElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.resetDeleteSourceFromS3">ResetDeleteSourceFromS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.resetMaxCount">ResetMaxCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeleteSourceFromS3` <a name="ResetDeleteSourceFromS3" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.resetDeleteSourceFromS3"></a>

```go
func ResetDeleteSourceFromS3()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetMaxCount` <a name="ResetMaxCount" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.resetMaxCount"></a>

```go
func ResetMaxCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.property.deleteSourceFromS3Input">DeleteSourceFromS3Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.property.maxCountInput">MaxCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.property.deleteSourceFromS3">DeleteSourceFromS3</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.property.maxCount">MaxCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeleteSourceFromS3Input`<sup>Optional</sup> <a name="DeleteSourceFromS3Input" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.property.deleteSourceFromS3Input"></a>

```go
func DeleteSourceFromS3Input() interface{}
```

- *Type:* interface{}

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `MaxCountInput`<sup>Optional</sup> <a name="MaxCountInput" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.property.maxCountInput"></a>

```go
func MaxCountInput() *f64
```

- *Type:* *f64

---

##### `DeleteSourceFromS3`<sup>Required</sup> <a name="DeleteSourceFromS3" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.property.deleteSourceFromS3"></a>

```go
func DeleteSourceFromS3() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `MaxCount`<sup>Required</sup> <a name="MaxCount" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.property.maxCount"></a>

```go
func MaxCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference <a name="ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticbeanstalkapplication"

elasticbeanstalkapplication.NewElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.putMaxAgeRule">PutMaxAgeRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.putMaxCountRule">PutMaxCountRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.resetMaxAgeRule">ResetMaxAgeRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.resetMaxCountRule">ResetMaxCountRule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMaxAgeRule` <a name="PutMaxAgeRule" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.putMaxAgeRule"></a>

```go
func PutMaxAgeRule(value ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.putMaxAgeRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule">ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule</a>

---

##### `PutMaxCountRule` <a name="PutMaxCountRule" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.putMaxCountRule"></a>

```go
func PutMaxCountRule(value ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.putMaxCountRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule">ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule</a>

---

##### `ResetMaxAgeRule` <a name="ResetMaxAgeRule" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.resetMaxAgeRule"></a>

```go
func ResetMaxAgeRule()
```

##### `ResetMaxCountRule` <a name="ResetMaxCountRule" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.resetMaxCountRule"></a>

```go
func ResetMaxCountRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.property.maxAgeRule">MaxAgeRule</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference">ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.property.maxCountRule">MaxCountRule</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference">ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.property.maxAgeRuleInput">MaxAgeRuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.property.maxCountRuleInput">MaxCountRuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxAgeRule`<sup>Required</sup> <a name="MaxAgeRule" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.property.maxAgeRule"></a>

```go
func MaxAgeRule() ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference">ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference</a>

---

##### `MaxCountRule`<sup>Required</sup> <a name="MaxCountRule" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.property.maxCountRule"></a>

```go
func MaxCountRule() ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference">ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference</a>

---

##### `MaxAgeRuleInput`<sup>Optional</sup> <a name="MaxAgeRuleInput" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.property.maxAgeRuleInput"></a>

```go
func MaxAgeRuleInput() interface{}
```

- *Type:* interface{}

---

##### `MaxCountRuleInput`<sup>Optional</sup> <a name="MaxCountRuleInput" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.property.maxCountRuleInput"></a>

```go
func MaxCountRuleInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



