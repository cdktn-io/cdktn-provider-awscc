# `cognitoLogDeliveryConfiguration` Submodule <a name="`cognitoLogDeliveryConfiguration` Submodule" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoLogDeliveryConfiguration <a name="CognitoLogDeliveryConfiguration" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_log_delivery_configuration awscc_cognito_log_delivery_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cognitologdeliveryconfiguration"

cognitologdeliveryconfiguration.NewCognitoLogDeliveryConfiguration(scope Construct, id *string, config CognitoLogDeliveryConfigurationConfig) CognitoLogDeliveryConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationConfig">CognitoLogDeliveryConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationConfig">CognitoLogDeliveryConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.putLogConfigurations">PutLogConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.resetLogConfigurations">ResetLogConfigurations</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLogConfigurations` <a name="PutLogConfigurations" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.putLogConfigurations"></a>

```go
func PutLogConfigurations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.putLogConfigurations.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetLogConfigurations` <a name="ResetLogConfigurations" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.resetLogConfigurations"></a>

```go
func ResetLogConfigurations()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CognitoLogDeliveryConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cognitologdeliveryconfiguration"

cognitologdeliveryconfiguration.CognitoLogDeliveryConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cognitologdeliveryconfiguration"

cognitologdeliveryconfiguration.CognitoLogDeliveryConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cognitologdeliveryconfiguration"

cognitologdeliveryconfiguration.CognitoLogDeliveryConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cognitologdeliveryconfiguration"

cognitologdeliveryconfiguration.CognitoLogDeliveryConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CognitoLogDeliveryConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CognitoLogDeliveryConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CognitoLogDeliveryConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_log_delivery_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CognitoLogDeliveryConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.logConfigurations">LogConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList">CognitoLogDeliveryConfigurationLogConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.logDeliveryConfigurationId">LogDeliveryConfigurationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.logConfigurationsInput">LogConfigurationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.userPoolIdInput">UserPoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.userPoolId">UserPoolId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LogConfigurations`<sup>Required</sup> <a name="LogConfigurations" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.logConfigurations"></a>

```go
func LogConfigurations() CognitoLogDeliveryConfigurationLogConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList">CognitoLogDeliveryConfigurationLogConfigurationsList</a>

---

##### `LogDeliveryConfigurationId`<sup>Required</sup> <a name="LogDeliveryConfigurationId" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.logDeliveryConfigurationId"></a>

```go
func LogDeliveryConfigurationId() *string
```

- *Type:* *string

---

##### `LogConfigurationsInput`<sup>Optional</sup> <a name="LogConfigurationsInput" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.logConfigurationsInput"></a>

```go
func LogConfigurationsInput() interface{}
```

- *Type:* interface{}

---

##### `UserPoolIdInput`<sup>Optional</sup> <a name="UserPoolIdInput" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.userPoolIdInput"></a>

```go
func UserPoolIdInput() *string
```

- *Type:* *string

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.userPoolId"></a>

```go
func UserPoolId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoLogDeliveryConfigurationConfig <a name="CognitoLogDeliveryConfigurationConfig" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cognitologdeliveryconfiguration"

&cognitologdeliveryconfiguration.CognitoLogDeliveryConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	UserPoolId: *string,
	LogConfigurations: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationConfig.property.userPoolId">UserPoolId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_log_delivery_configuration#user_pool_id CognitoLogDeliveryConfiguration#user_pool_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationConfig.property.logConfigurations">LogConfigurations</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_log_delivery_configuration#log_configurations CognitoLogDeliveryConfiguration#log_configurations}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationConfig.property.userPoolId"></a>

```go
UserPoolId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_log_delivery_configuration#user_pool_id CognitoLogDeliveryConfiguration#user_pool_id}.

---

##### `LogConfigurations`<sup>Optional</sup> <a name="LogConfigurations" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationConfig.property.logConfigurations"></a>

```go
LogConfigurations interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_log_delivery_configuration#log_configurations CognitoLogDeliveryConfiguration#log_configurations}.

---

### CognitoLogDeliveryConfigurationLogConfigurations <a name="CognitoLogDeliveryConfigurationLogConfigurations" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cognitologdeliveryconfiguration"

&cognitologdeliveryconfiguration.CognitoLogDeliveryConfigurationLogConfigurations {
	CloudwatchLogsConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfiguration,
	EventSource: *string,
	FirehoseConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration,
	LogLevel: *string,
	S3Configuration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3Configuration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurations.property.cloudwatchLogsConfiguration">CloudwatchLogsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfiguration">CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_log_delivery_configuration#cloudwatch_logs_configuration CognitoLogDeliveryConfiguration#cloudwatch_logs_configuration}. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurations.property.eventSource">EventSource</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_log_delivery_configuration#event_source CognitoLogDeliveryConfiguration#event_source}. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurations.property.firehoseConfiguration">FirehoseConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration">CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_log_delivery_configuration#firehose_configuration CognitoLogDeliveryConfiguration#firehose_configuration}. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurations.property.logLevel">LogLevel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_log_delivery_configuration#log_level CognitoLogDeliveryConfiguration#log_level}. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurations.property.s3Configuration">S3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3Configuration">CognitoLogDeliveryConfigurationLogConfigurationsS3Configuration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_log_delivery_configuration#s3_configuration CognitoLogDeliveryConfiguration#s3_configuration}. |

---

##### `CloudwatchLogsConfiguration`<sup>Optional</sup> <a name="CloudwatchLogsConfiguration" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurations.property.cloudwatchLogsConfiguration"></a>

```go
CloudwatchLogsConfiguration CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfiguration">CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_log_delivery_configuration#cloudwatch_logs_configuration CognitoLogDeliveryConfiguration#cloudwatch_logs_configuration}.

---

##### `EventSource`<sup>Optional</sup> <a name="EventSource" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurations.property.eventSource"></a>

```go
EventSource *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_log_delivery_configuration#event_source CognitoLogDeliveryConfiguration#event_source}.

---

##### `FirehoseConfiguration`<sup>Optional</sup> <a name="FirehoseConfiguration" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurations.property.firehoseConfiguration"></a>

```go
FirehoseConfiguration CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration">CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_log_delivery_configuration#firehose_configuration CognitoLogDeliveryConfiguration#firehose_configuration}.

---

##### `LogLevel`<sup>Optional</sup> <a name="LogLevel" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurations.property.logLevel"></a>

```go
LogLevel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_log_delivery_configuration#log_level CognitoLogDeliveryConfiguration#log_level}.

---

##### `S3Configuration`<sup>Optional</sup> <a name="S3Configuration" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurations.property.s3Configuration"></a>

```go
S3Configuration CognitoLogDeliveryConfigurationLogConfigurationsS3Configuration
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3Configuration">CognitoLogDeliveryConfigurationLogConfigurationsS3Configuration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_log_delivery_configuration#s3_configuration CognitoLogDeliveryConfiguration#s3_configuration}.

---

### CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfiguration <a name="CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfiguration" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cognitologdeliveryconfiguration"

&cognitologdeliveryconfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfiguration {
	LogGroupArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfiguration.property.logGroupArn">LogGroupArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_log_delivery_configuration#log_group_arn CognitoLogDeliveryConfiguration#log_group_arn}. |

---

##### `LogGroupArn`<sup>Optional</sup> <a name="LogGroupArn" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfiguration.property.logGroupArn"></a>

```go
LogGroupArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_log_delivery_configuration#log_group_arn CognitoLogDeliveryConfiguration#log_group_arn}.

---

### CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration <a name="CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cognitologdeliveryconfiguration"

&cognitologdeliveryconfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration {
	StreamArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration.property.streamArn">StreamArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_log_delivery_configuration#stream_arn CognitoLogDeliveryConfiguration#stream_arn}. |

---

##### `StreamArn`<sup>Optional</sup> <a name="StreamArn" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration.property.streamArn"></a>

```go
StreamArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_log_delivery_configuration#stream_arn CognitoLogDeliveryConfiguration#stream_arn}.

---

### CognitoLogDeliveryConfigurationLogConfigurationsS3Configuration <a name="CognitoLogDeliveryConfigurationLogConfigurationsS3Configuration" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3Configuration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cognitologdeliveryconfiguration"

&cognitologdeliveryconfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3Configuration {
	BucketArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3Configuration.property.bucketArn">BucketArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_log_delivery_configuration#bucket_arn CognitoLogDeliveryConfiguration#bucket_arn}. |

---

##### `BucketArn`<sup>Optional</sup> <a name="BucketArn" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3Configuration.property.bucketArn"></a>

```go
BucketArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cognito_log_delivery_configuration#bucket_arn CognitoLogDeliveryConfiguration#bucket_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference <a name="CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cognitologdeliveryconfiguration"

cognitologdeliveryconfiguration.NewCognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.resetLogGroupArn">ResetLogGroupArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogGroupArn` <a name="ResetLogGroupArn" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.resetLogGroupArn"></a>

```go
func ResetLogGroupArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.property.logGroupArnInput">LogGroupArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.property.logGroupArn">LogGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogGroupArnInput`<sup>Optional</sup> <a name="LogGroupArnInput" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.property.logGroupArnInput"></a>

```go
func LogGroupArnInput() *string
```

- *Type:* *string

---

##### `LogGroupArn`<sup>Required</sup> <a name="LogGroupArn" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.property.logGroupArn"></a>

```go
func LogGroupArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference <a name="CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cognitologdeliveryconfiguration"

cognitologdeliveryconfiguration.NewCognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.resetStreamArn">ResetStreamArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStreamArn` <a name="ResetStreamArn" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.resetStreamArn"></a>

```go
func ResetStreamArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.property.streamArnInput">StreamArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.property.streamArn">StreamArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StreamArnInput`<sup>Optional</sup> <a name="StreamArnInput" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.property.streamArnInput"></a>

```go
func StreamArnInput() *string
```

- *Type:* *string

---

##### `StreamArn`<sup>Required</sup> <a name="StreamArn" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.property.streamArn"></a>

```go
func StreamArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CognitoLogDeliveryConfigurationLogConfigurationsList <a name="CognitoLogDeliveryConfigurationLogConfigurationsList" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cognitologdeliveryconfiguration"

cognitologdeliveryconfiguration.NewCognitoLogDeliveryConfigurationLogConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CognitoLogDeliveryConfigurationLogConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.get"></a>

```go
func Get(index *f64) CognitoLogDeliveryConfigurationLogConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CognitoLogDeliveryConfigurationLogConfigurationsOutputReference <a name="CognitoLogDeliveryConfigurationLogConfigurationsOutputReference" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cognitologdeliveryconfiguration"

cognitologdeliveryconfiguration.NewCognitoLogDeliveryConfigurationLogConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CognitoLogDeliveryConfigurationLogConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.putCloudwatchLogsConfiguration">PutCloudwatchLogsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.putFirehoseConfiguration">PutFirehoseConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.putS3Configuration">PutS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.resetCloudwatchLogsConfiguration">ResetCloudwatchLogsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.resetEventSource">ResetEventSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.resetFirehoseConfiguration">ResetFirehoseConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.resetLogLevel">ResetLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.resetS3Configuration">ResetS3Configuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudwatchLogsConfiguration` <a name="PutCloudwatchLogsConfiguration" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.putCloudwatchLogsConfiguration"></a>

```go
func PutCloudwatchLogsConfiguration(value CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.putCloudwatchLogsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfiguration">CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfiguration</a>

---

##### `PutFirehoseConfiguration` <a name="PutFirehoseConfiguration" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.putFirehoseConfiguration"></a>

```go
func PutFirehoseConfiguration(value CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.putFirehoseConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration">CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfiguration</a>

---

##### `PutS3Configuration` <a name="PutS3Configuration" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.putS3Configuration"></a>

```go
func PutS3Configuration(value CognitoLogDeliveryConfigurationLogConfigurationsS3Configuration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.putS3Configuration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3Configuration">CognitoLogDeliveryConfigurationLogConfigurationsS3Configuration</a>

---

##### `ResetCloudwatchLogsConfiguration` <a name="ResetCloudwatchLogsConfiguration" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.resetCloudwatchLogsConfiguration"></a>

```go
func ResetCloudwatchLogsConfiguration()
```

##### `ResetEventSource` <a name="ResetEventSource" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.resetEventSource"></a>

```go
func ResetEventSource()
```

##### `ResetFirehoseConfiguration` <a name="ResetFirehoseConfiguration" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.resetFirehoseConfiguration"></a>

```go
func ResetFirehoseConfiguration()
```

##### `ResetLogLevel` <a name="ResetLogLevel" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.resetLogLevel"></a>

```go
func ResetLogLevel()
```

##### `ResetS3Configuration` <a name="ResetS3Configuration" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.resetS3Configuration"></a>

```go
func ResetS3Configuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.cloudwatchLogsConfiguration">CloudwatchLogsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference">CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.firehoseConfiguration">FirehoseConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference">CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.s3Configuration">S3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference">CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.cloudwatchLogsConfigurationInput">CloudwatchLogsConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.eventSourceInput">EventSourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.firehoseConfigurationInput">FirehoseConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.logLevelInput">LogLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.s3ConfigurationInput">S3ConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.eventSource">EventSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.logLevel">LogLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudwatchLogsConfiguration`<sup>Required</sup> <a name="CloudwatchLogsConfiguration" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.cloudwatchLogsConfiguration"></a>

```go
func CloudwatchLogsConfiguration() CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference">CognitoLogDeliveryConfigurationLogConfigurationsCloudwatchLogsConfigurationOutputReference</a>

---

##### `FirehoseConfiguration`<sup>Required</sup> <a name="FirehoseConfiguration" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.firehoseConfiguration"></a>

```go
func FirehoseConfiguration() CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference">CognitoLogDeliveryConfigurationLogConfigurationsFirehoseConfigurationOutputReference</a>

---

##### `S3Configuration`<sup>Required</sup> <a name="S3Configuration" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.s3Configuration"></a>

```go
func S3Configuration() CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference">CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference</a>

---

##### `CloudwatchLogsConfigurationInput`<sup>Optional</sup> <a name="CloudwatchLogsConfigurationInput" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.cloudwatchLogsConfigurationInput"></a>

```go
func CloudwatchLogsConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `EventSourceInput`<sup>Optional</sup> <a name="EventSourceInput" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.eventSourceInput"></a>

```go
func EventSourceInput() *string
```

- *Type:* *string

---

##### `FirehoseConfigurationInput`<sup>Optional</sup> <a name="FirehoseConfigurationInput" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.firehoseConfigurationInput"></a>

```go
func FirehoseConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `LogLevelInput`<sup>Optional</sup> <a name="LogLevelInput" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.logLevelInput"></a>

```go
func LogLevelInput() *string
```

- *Type:* *string

---

##### `S3ConfigurationInput`<sup>Optional</sup> <a name="S3ConfigurationInput" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.s3ConfigurationInput"></a>

```go
func S3ConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `EventSource`<sup>Required</sup> <a name="EventSource" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.eventSource"></a>

```go
func EventSource() *string
```

- *Type:* *string

---

##### `LogLevel`<sup>Required</sup> <a name="LogLevel" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.logLevel"></a>

```go
func LogLevel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference <a name="CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cognitologdeliveryconfiguration"

cognitologdeliveryconfiguration.NewCognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.resetBucketArn">ResetBucketArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucketArn` <a name="ResetBucketArn" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.resetBucketArn"></a>

```go
func ResetBucketArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.property.bucketArnInput">BucketArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.property.bucketArn">BucketArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketArnInput`<sup>Optional</sup> <a name="BucketArnInput" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.property.bucketArnInput"></a>

```go
func BucketArnInput() *string
```

- *Type:* *string

---

##### `BucketArn`<sup>Required</sup> <a name="BucketArn" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.property.bucketArn"></a>

```go
func BucketArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cognitoLogDeliveryConfiguration.CognitoLogDeliveryConfigurationLogConfigurationsS3ConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



