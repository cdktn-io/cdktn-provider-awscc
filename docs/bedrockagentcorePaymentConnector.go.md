# `bedrockagentcorePaymentConnector` Submodule <a name="`bedrockagentcorePaymentConnector` Submodule" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcorePaymentConnector <a name="BedrockagentcorePaymentConnector" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_payment_connector awscc_bedrockagentcore_payment_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorepaymentconnector"

bedrockagentcorepaymentconnector.NewBedrockagentcorePaymentConnector(scope Construct, id *string, config BedrockagentcorePaymentConnectorConfig) BedrockagentcorePaymentConnector
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig">BedrockagentcorePaymentConnectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig">BedrockagentcorePaymentConnectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.putCredentialProviderConfigurations">PutCredentialProviderConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.resetCredentialProviderConfigurations">ResetCredentialProviderConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.resetProvisionMode">ResetProvisionMode</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCredentialProviderConfigurations` <a name="PutCredentialProviderConfigurations" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.putCredentialProviderConfigurations"></a>

```go
func PutCredentialProviderConfigurations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.putCredentialProviderConfigurations.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCredentialProviderConfigurations` <a name="ResetCredentialProviderConfigurations" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.resetCredentialProviderConfigurations"></a>

```go
func ResetCredentialProviderConfigurations()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetProvisionMode` <a name="ResetProvisionMode" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.resetProvisionMode"></a>

```go
func ResetProvisionMode()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockagentcorePaymentConnector resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorepaymentconnector"

bedrockagentcorepaymentconnector.BedrockagentcorePaymentConnector_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorepaymentconnector"

bedrockagentcorepaymentconnector.BedrockagentcorePaymentConnector_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorepaymentconnector"

bedrockagentcorepaymentconnector.BedrockagentcorePaymentConnector_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorepaymentconnector"

bedrockagentcorepaymentconnector.BedrockagentcorePaymentConnector_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a BedrockagentcorePaymentConnector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BedrockagentcorePaymentConnector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BedrockagentcorePaymentConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_payment_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the BedrockagentcorePaymentConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.authorizationUrl">AuthorizationUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.connectorCreatedAt">ConnectorCreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.connectorLastUpdatedAt">ConnectorLastUpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.connectorStatus">ConnectorStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.credentialProviderConfigurations">CredentialProviderConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList">BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.paymentConnectorArn">PaymentConnectorArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.paymentConnectorId">PaymentConnectorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.connectorNameInput">ConnectorNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.connectorTypeInput">ConnectorTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.credentialProviderConfigurationsInput">CredentialProviderConfigurationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.paymentManagerIdInput">PaymentManagerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.provisionModeInput">ProvisionModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.connectorName">ConnectorName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.connectorType">ConnectorType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.paymentManagerId">PaymentManagerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.provisionMode">ProvisionMode</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AuthorizationUrl`<sup>Required</sup> <a name="AuthorizationUrl" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.authorizationUrl"></a>

```go
func AuthorizationUrl() *string
```

- *Type:* *string

---

##### `ConnectorCreatedAt`<sup>Required</sup> <a name="ConnectorCreatedAt" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.connectorCreatedAt"></a>

```go
func ConnectorCreatedAt() *string
```

- *Type:* *string

---

##### `ConnectorLastUpdatedAt`<sup>Required</sup> <a name="ConnectorLastUpdatedAt" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.connectorLastUpdatedAt"></a>

```go
func ConnectorLastUpdatedAt() *string
```

- *Type:* *string

---

##### `ConnectorStatus`<sup>Required</sup> <a name="ConnectorStatus" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.connectorStatus"></a>

```go
func ConnectorStatus() *string
```

- *Type:* *string

---

##### `CredentialProviderConfigurations`<sup>Required</sup> <a name="CredentialProviderConfigurations" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.credentialProviderConfigurations"></a>

```go
func CredentialProviderConfigurations() BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList">BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PaymentConnectorArn`<sup>Required</sup> <a name="PaymentConnectorArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.paymentConnectorArn"></a>

```go
func PaymentConnectorArn() *string
```

- *Type:* *string

---

##### `PaymentConnectorId`<sup>Required</sup> <a name="PaymentConnectorId" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.paymentConnectorId"></a>

```go
func PaymentConnectorId() *string
```

- *Type:* *string

---

##### `ConnectorNameInput`<sup>Optional</sup> <a name="ConnectorNameInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.connectorNameInput"></a>

```go
func ConnectorNameInput() *string
```

- *Type:* *string

---

##### `ConnectorTypeInput`<sup>Optional</sup> <a name="ConnectorTypeInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.connectorTypeInput"></a>

```go
func ConnectorTypeInput() *string
```

- *Type:* *string

---

##### `CredentialProviderConfigurationsInput`<sup>Optional</sup> <a name="CredentialProviderConfigurationsInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.credentialProviderConfigurationsInput"></a>

```go
func CredentialProviderConfigurationsInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `PaymentManagerIdInput`<sup>Optional</sup> <a name="PaymentManagerIdInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.paymentManagerIdInput"></a>

```go
func PaymentManagerIdInput() *string
```

- *Type:* *string

---

##### `ProvisionModeInput`<sup>Optional</sup> <a name="ProvisionModeInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.provisionModeInput"></a>

```go
func ProvisionModeInput() *string
```

- *Type:* *string

---

##### `ConnectorName`<sup>Required</sup> <a name="ConnectorName" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.connectorName"></a>

```go
func ConnectorName() *string
```

- *Type:* *string

---

##### `ConnectorType`<sup>Required</sup> <a name="ConnectorType" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.connectorType"></a>

```go
func ConnectorType() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `PaymentManagerId`<sup>Required</sup> <a name="PaymentManagerId" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.paymentManagerId"></a>

```go
func PaymentManagerId() *string
```

- *Type:* *string

---

##### `ProvisionMode`<sup>Required</sup> <a name="ProvisionMode" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.provisionMode"></a>

```go
func ProvisionMode() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnector.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcorePaymentConnectorConfig <a name="BedrockagentcorePaymentConnectorConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorepaymentconnector"

&bedrockagentcorepaymentconnector.BedrockagentcorePaymentConnectorConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ConnectorName: *string,
	ConnectorType: *string,
	PaymentManagerId: *string,
	CredentialProviderConfigurations: interface{},
	Description: *string,
	ProvisionMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.connectorName">ConnectorName</a></code> | <code>*string</code> | The name of the payment connector. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.connectorType">ConnectorType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_payment_connector#connector_type BedrockagentcorePaymentConnector#connector_type}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.paymentManagerId">PaymentManagerId</a></code> | <code>*string</code> | The identifier of the parent payment manager. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.credentialProviderConfigurations">CredentialProviderConfigurations</a></code> | <code>interface{}</code> | The credential provider configurations for the connector. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.description">Description</a></code> | <code>*string</code> | A description of the payment connector. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.provisionMode">ProvisionMode</a></code> | <code>*string</code> | The provision mode for creating the connector. MANUAL requires CredentialProviderConfigurations; QUICK_CREATE orchestrates OAuth consent and credential provisioning. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConnectorName`<sup>Required</sup> <a name="ConnectorName" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.connectorName"></a>

```go
ConnectorName *string
```

- *Type:* *string

The name of the payment connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_payment_connector#connector_name BedrockagentcorePaymentConnector#connector_name}

---

##### `ConnectorType`<sup>Required</sup> <a name="ConnectorType" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.connectorType"></a>

```go
ConnectorType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_payment_connector#connector_type BedrockagentcorePaymentConnector#connector_type}.

---

##### `PaymentManagerId`<sup>Required</sup> <a name="PaymentManagerId" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.paymentManagerId"></a>

```go
PaymentManagerId *string
```

- *Type:* *string

The identifier of the parent payment manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_payment_connector#payment_manager_id BedrockagentcorePaymentConnector#payment_manager_id}

---

##### `CredentialProviderConfigurations`<sup>Optional</sup> <a name="CredentialProviderConfigurations" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.credentialProviderConfigurations"></a>

```go
CredentialProviderConfigurations interface{}
```

- *Type:* interface{}

The credential provider configurations for the connector.

Required when ProvisionMode is MANUAL or not specified. Empty for QUICK_CREATE until provisioning completes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_payment_connector#credential_provider_configurations BedrockagentcorePaymentConnector#credential_provider_configurations}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of the payment connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_payment_connector#description BedrockagentcorePaymentConnector#description}

---

##### `ProvisionMode`<sup>Optional</sup> <a name="ProvisionMode" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorConfig.property.provisionMode"></a>

```go
ProvisionMode *string
```

- *Type:* *string

The provision mode for creating the connector. MANUAL requires CredentialProviderConfigurations; QUICK_CREATE orchestrates OAuth consent and credential provisioning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_payment_connector#provision_mode BedrockagentcorePaymentConnector#provision_mode}

---

### BedrockagentcorePaymentConnectorCredentialProviderConfigurations <a name="BedrockagentcorePaymentConnectorCredentialProviderConfigurations" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorepaymentconnector"

&bedrockagentcorepaymentconnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurations {
	CoinbaseCdp: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp,
	StripePrivy: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurations.property.coinbaseCdp">CoinbaseCdp</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp">BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_payment_connector#coinbase_cdp BedrockagentcorePaymentConnector#coinbase_cdp}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurations.property.stripePrivy">StripePrivy</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy">BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_payment_connector#stripe_privy BedrockagentcorePaymentConnector#stripe_privy}. |

---

##### `CoinbaseCdp`<sup>Optional</sup> <a name="CoinbaseCdp" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurations.property.coinbaseCdp"></a>

```go
CoinbaseCdp BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp">BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_payment_connector#coinbase_cdp BedrockagentcorePaymentConnector#coinbase_cdp}.

---

##### `StripePrivy`<sup>Optional</sup> <a name="StripePrivy" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurations.property.stripePrivy"></a>

```go
StripePrivy BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy">BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_payment_connector#stripe_privy BedrockagentcorePaymentConnector#stripe_privy}.

---

### BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp <a name="BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorepaymentconnector"

&bedrockagentcorepaymentconnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp {
	CredentialProviderArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp.property.credentialProviderArn">CredentialProviderArn</a></code> | <code>*string</code> | The ARN of the payment credential provider. |

---

##### `CredentialProviderArn`<sup>Optional</sup> <a name="CredentialProviderArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp.property.credentialProviderArn"></a>

```go
CredentialProviderArn *string
```

- *Type:* *string

The ARN of the payment credential provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_payment_connector#credential_provider_arn BedrockagentcorePaymentConnector#credential_provider_arn}

---

### BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy <a name="BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorepaymentconnector"

&bedrockagentcorepaymentconnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy {
	CredentialProviderArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy.property.credentialProviderArn">CredentialProviderArn</a></code> | <code>*string</code> | The ARN of the payment credential provider. |

---

##### `CredentialProviderArn`<sup>Optional</sup> <a name="CredentialProviderArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy.property.credentialProviderArn"></a>

```go
CredentialProviderArn *string
```

- *Type:* *string

The ARN of the payment credential provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_payment_connector#credential_provider_arn BedrockagentcorePaymentConnector#credential_provider_arn}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference <a name="BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorepaymentconnector"

bedrockagentcorepaymentconnector.NewBedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.resetCredentialProviderArn">ResetCredentialProviderArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCredentialProviderArn` <a name="ResetCredentialProviderArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.resetCredentialProviderArn"></a>

```go
func ResetCredentialProviderArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.property.credentialProviderArnInput">CredentialProviderArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.property.credentialProviderArn">CredentialProviderArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CredentialProviderArnInput`<sup>Optional</sup> <a name="CredentialProviderArnInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.property.credentialProviderArnInput"></a>

```go
func CredentialProviderArnInput() *string
```

- *Type:* *string

---

##### `CredentialProviderArn`<sup>Required</sup> <a name="CredentialProviderArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.property.credentialProviderArn"></a>

```go
func CredentialProviderArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList <a name="BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorepaymentconnector"

bedrockagentcorepaymentconnector.NewBedrockagentcorePaymentConnectorCredentialProviderConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.get"></a>

```go
func Get(index *f64) BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference <a name="BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorepaymentconnector"

bedrockagentcorepaymentconnector.NewBedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.putCoinbaseCdp">PutCoinbaseCdp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.putStripePrivy">PutStripePrivy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.resetCoinbaseCdp">ResetCoinbaseCdp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.resetStripePrivy">ResetStripePrivy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCoinbaseCdp` <a name="PutCoinbaseCdp" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.putCoinbaseCdp"></a>

```go
func PutCoinbaseCdp(value BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.putCoinbaseCdp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp">BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdp</a>

---

##### `PutStripePrivy` <a name="PutStripePrivy" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.putStripePrivy"></a>

```go
func PutStripePrivy(value BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.putStripePrivy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy">BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivy</a>

---

##### `ResetCoinbaseCdp` <a name="ResetCoinbaseCdp" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.resetCoinbaseCdp"></a>

```go
func ResetCoinbaseCdp()
```

##### `ResetStripePrivy` <a name="ResetStripePrivy" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.resetStripePrivy"></a>

```go
func ResetStripePrivy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.property.coinbaseCdp">CoinbaseCdp</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference">BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.property.stripePrivy">StripePrivy</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference">BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.property.coinbaseCdpInput">CoinbaseCdpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.property.stripePrivyInput">StripePrivyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CoinbaseCdp`<sup>Required</sup> <a name="CoinbaseCdp" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.property.coinbaseCdp"></a>

```go
func CoinbaseCdp() BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference">BedrockagentcorePaymentConnectorCredentialProviderConfigurationsCoinbaseCdpOutputReference</a>

---

##### `StripePrivy`<sup>Required</sup> <a name="StripePrivy" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.property.stripePrivy"></a>

```go
func StripePrivy() BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference">BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference</a>

---

##### `CoinbaseCdpInput`<sup>Optional</sup> <a name="CoinbaseCdpInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.property.coinbaseCdpInput"></a>

```go
func CoinbaseCdpInput() interface{}
```

- *Type:* interface{}

---

##### `StripePrivyInput`<sup>Optional</sup> <a name="StripePrivyInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.property.stripePrivyInput"></a>

```go
func StripePrivyInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference <a name="BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorepaymentconnector"

bedrockagentcorepaymentconnector.NewBedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.resetCredentialProviderArn">ResetCredentialProviderArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCredentialProviderArn` <a name="ResetCredentialProviderArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.resetCredentialProviderArn"></a>

```go
func ResetCredentialProviderArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.property.credentialProviderArnInput">CredentialProviderArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.property.credentialProviderArn">CredentialProviderArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CredentialProviderArnInput`<sup>Optional</sup> <a name="CredentialProviderArnInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.property.credentialProviderArnInput"></a>

```go
func CredentialProviderArnInput() *string
```

- *Type:* *string

---

##### `CredentialProviderArn`<sup>Required</sup> <a name="CredentialProviderArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.property.credentialProviderArn"></a>

```go
func CredentialProviderArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentConnector.BedrockagentcorePaymentConnectorCredentialProviderConfigurationsStripePrivyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



