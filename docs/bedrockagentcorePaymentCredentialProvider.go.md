# `bedrockagentcorePaymentCredentialProvider` Submodule <a name="`bedrockagentcorePaymentCredentialProvider` Submodule" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcorePaymentCredentialProvider <a name="BedrockagentcorePaymentCredentialProvider" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider awscc_bedrockagentcore_payment_credential_provider}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorepaymentcredentialprovider"

bedrockagentcorepaymentcredentialprovider.NewBedrockagentcorePaymentCredentialProvider(scope Construct, id *string, config BedrockagentcorePaymentCredentialProviderConfig) BedrockagentcorePaymentCredentialProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig">BedrockagentcorePaymentCredentialProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig">BedrockagentcorePaymentCredentialProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.putProviderConfigurationInput">PutProviderConfigurationInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.resetProviderConfigurationInput">ResetProviderConfigurationInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProviderConfigurationInput` <a name="PutProviderConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.putProviderConfigurationInput"></a>

```go
func PutProviderConfigurationInput(value BedrockagentcorePaymentCredentialProviderProviderConfigurationInput)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.putProviderConfigurationInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInput">BedrockagentcorePaymentCredentialProviderProviderConfigurationInput</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetProviderConfigurationInput` <a name="ResetProviderConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.resetProviderConfigurationInput"></a>

```go
func ResetProviderConfigurationInput()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockagentcorePaymentCredentialProvider resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorepaymentcredentialprovider"

bedrockagentcorepaymentcredentialprovider.BedrockagentcorePaymentCredentialProvider_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorepaymentcredentialprovider"

bedrockagentcorepaymentcredentialprovider.BedrockagentcorePaymentCredentialProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorepaymentcredentialprovider"

bedrockagentcorepaymentcredentialprovider.BedrockagentcorePaymentCredentialProvider_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorepaymentcredentialprovider"

bedrockagentcorepaymentcredentialprovider.BedrockagentcorePaymentCredentialProvider_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a BedrockagentcorePaymentCredentialProvider resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BedrockagentcorePaymentCredentialProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BedrockagentcorePaymentCredentialProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the BedrockagentcorePaymentCredentialProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.createdTime">CreatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.credentialProviderArn">CredentialProviderArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.lastUpdatedTime">LastUpdatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.providerConfigurationInput">ProviderConfigurationInput</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.providerConfigurationOutput">ProviderConfigurationOutput</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList">BedrockagentcorePaymentCredentialProviderTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.credentialProviderVendorInput">CredentialProviderVendorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.providerConfigurationInputInput">ProviderConfigurationInputInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.credentialProviderVendor">CredentialProviderVendor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.createdTime"></a>

```go
func CreatedTime() *string
```

- *Type:* *string

---

##### `CredentialProviderArn`<sup>Required</sup> <a name="CredentialProviderArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.credentialProviderArn"></a>

```go
func CredentialProviderArn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastUpdatedTime`<sup>Required</sup> <a name="LastUpdatedTime" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.lastUpdatedTime"></a>

```go
func LastUpdatedTime() *string
```

- *Type:* *string

---

##### `ProviderConfigurationInput`<sup>Required</sup> <a name="ProviderConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.providerConfigurationInput"></a>

```go
func ProviderConfigurationInput() BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference</a>

---

##### `ProviderConfigurationOutput`<sup>Required</sup> <a name="ProviderConfigurationOutput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.providerConfigurationOutput"></a>

```go
func ProviderConfigurationOutput() BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.tags"></a>

```go
func Tags() BedrockagentcorePaymentCredentialProviderTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList">BedrockagentcorePaymentCredentialProviderTagsList</a>

---

##### `CredentialProviderVendorInput`<sup>Optional</sup> <a name="CredentialProviderVendorInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.credentialProviderVendorInput"></a>

```go
func CredentialProviderVendorInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProviderConfigurationInputInput`<sup>Optional</sup> <a name="ProviderConfigurationInputInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.providerConfigurationInputInput"></a>

```go
func ProviderConfigurationInputInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `CredentialProviderVendor`<sup>Required</sup> <a name="CredentialProviderVendor" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.credentialProviderVendor"></a>

```go
func CredentialProviderVendor() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcorePaymentCredentialProviderConfig <a name="BedrockagentcorePaymentCredentialProviderConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorepaymentcredentialprovider"

&bedrockagentcorepaymentcredentialprovider.BedrockagentcorePaymentCredentialProviderConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	CredentialProviderVendor: *string,
	Name: *string,
	ProviderConfigurationInput: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInput,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig.property.credentialProviderVendor">CredentialProviderVendor</a></code> | <code>*string</code> | Supported vendor types for payment providers. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig.property.name">Name</a></code> | <code>*string</code> | Unique name for the payment credential provider. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig.property.providerConfigurationInput">ProviderConfigurationInput</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInput">BedrockagentcorePaymentCredentialProviderProviderConfigurationInput</a></code> | Provider configuration input containing secrets for creation/update. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Tags for the payment credential provider. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CredentialProviderVendor`<sup>Required</sup> <a name="CredentialProviderVendor" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig.property.credentialProviderVendor"></a>

```go
CredentialProviderVendor *string
```

- *Type:* *string

Supported vendor types for payment providers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider#credential_provider_vendor BedrockagentcorePaymentCredentialProvider#credential_provider_vendor}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Unique name for the payment credential provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider#name BedrockagentcorePaymentCredentialProvider#name}

---

##### `ProviderConfigurationInput`<sup>Optional</sup> <a name="ProviderConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig.property.providerConfigurationInput"></a>

```go
ProviderConfigurationInput BedrockagentcorePaymentCredentialProviderProviderConfigurationInput
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInput">BedrockagentcorePaymentCredentialProviderProviderConfigurationInput</a>

Provider configuration input containing secrets for creation/update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider#provider_configuration_input BedrockagentcorePaymentCredentialProvider#provider_configuration_input}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Tags for the payment credential provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider#tags BedrockagentcorePaymentCredentialProvider#tags}

---

### BedrockagentcorePaymentCredentialProviderProviderConfigurationInput <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorepaymentcredentialprovider"

&bedrockagentcorepaymentcredentialprovider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInput {
	CoinbaseCdpConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration,
	StripePrivyConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInput.property.coinbaseCdpConfiguration">CoinbaseCdpConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration</a></code> | Coinbase CDP configuration with API credentials. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInput.property.stripePrivyConfiguration">StripePrivyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration</a></code> | Stripe Privy configuration with credentials. |

---

##### `CoinbaseCdpConfiguration`<sup>Optional</sup> <a name="CoinbaseCdpConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInput.property.coinbaseCdpConfiguration"></a>

```go
CoinbaseCdpConfiguration BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration</a>

Coinbase CDP configuration with API credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider#coinbase_cdp_configuration BedrockagentcorePaymentCredentialProvider#coinbase_cdp_configuration}

---

##### `StripePrivyConfiguration`<sup>Optional</sup> <a name="StripePrivyConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInput.property.stripePrivyConfiguration"></a>

```go
StripePrivyConfiguration BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration</a>

Stripe Privy configuration with credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider#stripe_privy_configuration BedrockagentcorePaymentCredentialProvider#stripe_privy_configuration}

---

### BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorepaymentcredentialprovider"

&bedrockagentcorepaymentcredentialprovider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration {
	ApiKeyId: *string,
	ApiKeySecret: *string,
	ApiKeySecretConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig,
	ApiKeySecretSource: *string,
	WalletSecret: *string,
	WalletSecretConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig,
	WalletSecretSource: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration.property.apiKeyId">ApiKeyId</a></code> | <code>*string</code> | The Coinbase CDP API key ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration.property.apiKeySecret">ApiKeySecret</a></code> | <code>*string</code> | The Coinbase CDP API key secret. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration.property.apiKeySecretConfig">ApiKeySecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig</a></code> | A reference to a customer-provided secret stored in AWS Secrets Manager. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration.property.apiKeySecretSource">ApiKeySecretSource</a></code> | <code>*string</code> | The source of the secret. Use MANAGED for service-managed secrets or EXTERNAL for customer-provided secrets. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration.property.walletSecret">WalletSecret</a></code> | <code>*string</code> | The Coinbase CDP wallet secret. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration.property.walletSecretConfig">WalletSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig</a></code> | A reference to a customer-provided secret stored in AWS Secrets Manager. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration.property.walletSecretSource">WalletSecretSource</a></code> | <code>*string</code> | The source of the secret. Use MANAGED for service-managed secrets or EXTERNAL for customer-provided secrets. |

---

##### `ApiKeyId`<sup>Optional</sup> <a name="ApiKeyId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration.property.apiKeyId"></a>

```go
ApiKeyId *string
```

- *Type:* *string

The Coinbase CDP API key ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider#api_key_id BedrockagentcorePaymentCredentialProvider#api_key_id}

---

##### `ApiKeySecret`<sup>Optional</sup> <a name="ApiKeySecret" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration.property.apiKeySecret"></a>

```go
ApiKeySecret *string
```

- *Type:* *string

The Coinbase CDP API key secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider#api_key_secret BedrockagentcorePaymentCredentialProvider#api_key_secret}

---

##### `ApiKeySecretConfig`<sup>Optional</sup> <a name="ApiKeySecretConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration.property.apiKeySecretConfig"></a>

```go
ApiKeySecretConfig BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig</a>

A reference to a customer-provided secret stored in AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider#api_key_secret_config BedrockagentcorePaymentCredentialProvider#api_key_secret_config}

---

##### `ApiKeySecretSource`<sup>Optional</sup> <a name="ApiKeySecretSource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration.property.apiKeySecretSource"></a>

```go
ApiKeySecretSource *string
```

- *Type:* *string

The source of the secret. Use MANAGED for service-managed secrets or EXTERNAL for customer-provided secrets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider#api_key_secret_source BedrockagentcorePaymentCredentialProvider#api_key_secret_source}

---

##### `WalletSecret`<sup>Optional</sup> <a name="WalletSecret" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration.property.walletSecret"></a>

```go
WalletSecret *string
```

- *Type:* *string

The Coinbase CDP wallet secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider#wallet_secret BedrockagentcorePaymentCredentialProvider#wallet_secret}

---

##### `WalletSecretConfig`<sup>Optional</sup> <a name="WalletSecretConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration.property.walletSecretConfig"></a>

```go
WalletSecretConfig BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig</a>

A reference to a customer-provided secret stored in AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider#wallet_secret_config BedrockagentcorePaymentCredentialProvider#wallet_secret_config}

---

##### `WalletSecretSource`<sup>Optional</sup> <a name="WalletSecretSource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration.property.walletSecretSource"></a>

```go
WalletSecretSource *string
```

- *Type:* *string

The source of the secret. Use MANAGED for service-managed secrets or EXTERNAL for customer-provided secrets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider#wallet_secret_source BedrockagentcorePaymentCredentialProvider#wallet_secret_source}

---

### BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorepaymentcredentialprovider"

&bedrockagentcorepaymentcredentialprovider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig {
	JsonKey: *string,
	SecretId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig.property.jsonKey">JsonKey</a></code> | <code>*string</code> | The JSON key within the secret that contains the credential value. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig.property.secretId">SecretId</a></code> | <code>*string</code> | The ID or ARN of the secret in AWS Secrets Manager. |

---

##### `JsonKey`<sup>Optional</sup> <a name="JsonKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig.property.jsonKey"></a>

```go
JsonKey *string
```

- *Type:* *string

The JSON key within the secret that contains the credential value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider#json_key BedrockagentcorePaymentCredentialProvider#json_key}

---

##### `SecretId`<sup>Optional</sup> <a name="SecretId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig.property.secretId"></a>

```go
SecretId *string
```

- *Type:* *string

The ID or ARN of the secret in AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider#secret_id BedrockagentcorePaymentCredentialProvider#secret_id}

---

### BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorepaymentcredentialprovider"

&bedrockagentcorepaymentcredentialprovider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig {
	JsonKey: *string,
	SecretId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig.property.jsonKey">JsonKey</a></code> | <code>*string</code> | The JSON key within the secret that contains the credential value. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig.property.secretId">SecretId</a></code> | <code>*string</code> | The ID or ARN of the secret in AWS Secrets Manager. |

---

##### `JsonKey`<sup>Optional</sup> <a name="JsonKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig.property.jsonKey"></a>

```go
JsonKey *string
```

- *Type:* *string

The JSON key within the secret that contains the credential value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider#json_key BedrockagentcorePaymentCredentialProvider#json_key}

---

##### `SecretId`<sup>Optional</sup> <a name="SecretId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig.property.secretId"></a>

```go
SecretId *string
```

- *Type:* *string

The ID or ARN of the secret in AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider#secret_id BedrockagentcorePaymentCredentialProvider#secret_id}

---

### BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorepaymentcredentialprovider"

&bedrockagentcorepaymentcredentialprovider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration {
	AppId: *string,
	AppSecret: *string,
	AppSecretConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig,
	AppSecretSource: *string,
	AuthorizationId: *string,
	AuthorizationPrivateKey: *string,
	AuthorizationPrivateKeyConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig,
	AuthorizationPrivateKeySource: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration.property.appId">AppId</a></code> | <code>*string</code> | The app ID provided by Privy. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration.property.appSecret">AppSecret</a></code> | <code>*string</code> | The app secret provided by Privy. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration.property.appSecretConfig">AppSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig</a></code> | A reference to a customer-provided secret stored in AWS Secrets Manager. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration.property.appSecretSource">AppSecretSource</a></code> | <code>*string</code> | The source of the secret. Use MANAGED for service-managed secrets or EXTERNAL for customer-provided secrets. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration.property.authorizationId">AuthorizationId</a></code> | <code>*string</code> | The authorization ID for the Stripe Privy integration. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration.property.authorizationPrivateKey">AuthorizationPrivateKey</a></code> | <code>*string</code> | The authorization private key for the Stripe Privy integration. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration.property.authorizationPrivateKeyConfig">AuthorizationPrivateKeyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig</a></code> | A reference to a customer-provided secret stored in AWS Secrets Manager. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration.property.authorizationPrivateKeySource">AuthorizationPrivateKeySource</a></code> | <code>*string</code> | The source of the secret. Use MANAGED for service-managed secrets or EXTERNAL for customer-provided secrets. |

---

##### `AppId`<sup>Optional</sup> <a name="AppId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration.property.appId"></a>

```go
AppId *string
```

- *Type:* *string

The app ID provided by Privy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider#app_id BedrockagentcorePaymentCredentialProvider#app_id}

---

##### `AppSecret`<sup>Optional</sup> <a name="AppSecret" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration.property.appSecret"></a>

```go
AppSecret *string
```

- *Type:* *string

The app secret provided by Privy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider#app_secret BedrockagentcorePaymentCredentialProvider#app_secret}

---

##### `AppSecretConfig`<sup>Optional</sup> <a name="AppSecretConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration.property.appSecretConfig"></a>

```go
AppSecretConfig BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig</a>

A reference to a customer-provided secret stored in AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider#app_secret_config BedrockagentcorePaymentCredentialProvider#app_secret_config}

---

##### `AppSecretSource`<sup>Optional</sup> <a name="AppSecretSource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration.property.appSecretSource"></a>

```go
AppSecretSource *string
```

- *Type:* *string

The source of the secret. Use MANAGED for service-managed secrets or EXTERNAL for customer-provided secrets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider#app_secret_source BedrockagentcorePaymentCredentialProvider#app_secret_source}

---

##### `AuthorizationId`<sup>Optional</sup> <a name="AuthorizationId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration.property.authorizationId"></a>

```go
AuthorizationId *string
```

- *Type:* *string

The authorization ID for the Stripe Privy integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider#authorization_id BedrockagentcorePaymentCredentialProvider#authorization_id}

---

##### `AuthorizationPrivateKey`<sup>Optional</sup> <a name="AuthorizationPrivateKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration.property.authorizationPrivateKey"></a>

```go
AuthorizationPrivateKey *string
```

- *Type:* *string

The authorization private key for the Stripe Privy integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider#authorization_private_key BedrockagentcorePaymentCredentialProvider#authorization_private_key}

---

##### `AuthorizationPrivateKeyConfig`<sup>Optional</sup> <a name="AuthorizationPrivateKeyConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration.property.authorizationPrivateKeyConfig"></a>

```go
AuthorizationPrivateKeyConfig BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig</a>

A reference to a customer-provided secret stored in AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider#authorization_private_key_config BedrockagentcorePaymentCredentialProvider#authorization_private_key_config}

---

##### `AuthorizationPrivateKeySource`<sup>Optional</sup> <a name="AuthorizationPrivateKeySource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration.property.authorizationPrivateKeySource"></a>

```go
AuthorizationPrivateKeySource *string
```

- *Type:* *string

The source of the secret. Use MANAGED for service-managed secrets or EXTERNAL for customer-provided secrets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider#authorization_private_key_source BedrockagentcorePaymentCredentialProvider#authorization_private_key_source}

---

### BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorepaymentcredentialprovider"

&bedrockagentcorepaymentcredentialprovider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig {
	JsonKey: *string,
	SecretId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig.property.jsonKey">JsonKey</a></code> | <code>*string</code> | The JSON key within the secret that contains the credential value. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig.property.secretId">SecretId</a></code> | <code>*string</code> | The ID or ARN of the secret in AWS Secrets Manager. |

---

##### `JsonKey`<sup>Optional</sup> <a name="JsonKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig.property.jsonKey"></a>

```go
JsonKey *string
```

- *Type:* *string

The JSON key within the secret that contains the credential value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider#json_key BedrockagentcorePaymentCredentialProvider#json_key}

---

##### `SecretId`<sup>Optional</sup> <a name="SecretId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig.property.secretId"></a>

```go
SecretId *string
```

- *Type:* *string

The ID or ARN of the secret in AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider#secret_id BedrockagentcorePaymentCredentialProvider#secret_id}

---

### BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorepaymentcredentialprovider"

&bedrockagentcorepaymentcredentialprovider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig {
	JsonKey: *string,
	SecretId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig.property.jsonKey">JsonKey</a></code> | <code>*string</code> | The JSON key within the secret that contains the credential value. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig.property.secretId">SecretId</a></code> | <code>*string</code> | The ID or ARN of the secret in AWS Secrets Manager. |

---

##### `JsonKey`<sup>Optional</sup> <a name="JsonKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig.property.jsonKey"></a>

```go
JsonKey *string
```

- *Type:* *string

The JSON key within the secret that contains the credential value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider#json_key BedrockagentcorePaymentCredentialProvider#json_key}

---

##### `SecretId`<sup>Optional</sup> <a name="SecretId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig.property.secretId"></a>

```go
SecretId *string
```

- *Type:* *string

The ID or ARN of the secret in AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider#secret_id BedrockagentcorePaymentCredentialProvider#secret_id}

---

### BedrockagentcorePaymentCredentialProviderProviderConfigurationOutput <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationOutput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorepaymentcredentialprovider"

&bedrockagentcorepaymentcredentialprovider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutput {

}
```


### BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfiguration <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorepaymentcredentialprovider"

&bedrockagentcorepaymentcredentialprovider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfiguration {

}
```


### BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArn <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArn.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorepaymentcredentialprovider"

&bedrockagentcorepaymentcredentialprovider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArn {

}
```


### BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArn <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArn.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorepaymentcredentialprovider"

&bedrockagentcorepaymentcredentialprovider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArn {

}
```


### BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfiguration <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorepaymentcredentialprovider"

&bedrockagentcorepaymentcredentialprovider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfiguration {

}
```


### BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArn <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArn.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorepaymentcredentialprovider"

&bedrockagentcorepaymentcredentialprovider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArn {

}
```


### BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArn <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArn.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorepaymentcredentialprovider"

&bedrockagentcorepaymentcredentialprovider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArn {

}
```


### BedrockagentcorePaymentCredentialProviderTags <a name="BedrockagentcorePaymentCredentialProviderTags" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorepaymentcredentialprovider"

&bedrockagentcorepaymentcredentialprovider.BedrockagentcorePaymentCredentialProviderTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider#key BedrockagentcorePaymentCredentialProvider#key}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider#value BedrockagentcorePaymentCredentialProvider#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider#key BedrockagentcorePaymentCredentialProvider#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_payment_credential_provider#value BedrockagentcorePaymentCredentialProvider#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorepaymentcredentialprovider"

bedrockagentcorepaymentcredentialprovider.NewBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.resetJsonKey">ResetJsonKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.resetSecretId">ResetSecretId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetJsonKey` <a name="ResetJsonKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.resetJsonKey"></a>

```go
func ResetJsonKey()
```

##### `ResetSecretId` <a name="ResetSecretId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.resetSecretId"></a>

```go
func ResetSecretId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.property.jsonKeyInput">JsonKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.property.secretIdInput">SecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.property.jsonKey">JsonKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.property.secretId">SecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `JsonKeyInput`<sup>Optional</sup> <a name="JsonKeyInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.property.jsonKeyInput"></a>

```go
func JsonKeyInput() *string
```

- *Type:* *string

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.property.secretIdInput"></a>

```go
func SecretIdInput() *string
```

- *Type:* *string

---

##### `JsonKey`<sup>Required</sup> <a name="JsonKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.property.jsonKey"></a>

```go
func JsonKey() *string
```

- *Type:* *string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.property.secretId"></a>

```go
func SecretId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorepaymentcredentialprovider"

bedrockagentcorepaymentcredentialprovider.NewBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.putApiKeySecretConfig">PutApiKeySecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.putWalletSecretConfig">PutWalletSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.resetApiKeyId">ResetApiKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.resetApiKeySecret">ResetApiKeySecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.resetApiKeySecretConfig">ResetApiKeySecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.resetApiKeySecretSource">ResetApiKeySecretSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.resetWalletSecret">ResetWalletSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.resetWalletSecretConfig">ResetWalletSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.resetWalletSecretSource">ResetWalletSecretSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKeySecretConfig` <a name="PutApiKeySecretConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.putApiKeySecretConfig"></a>

```go
func PutApiKeySecretConfig(value BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.putApiKeySecretConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfig</a>

---

##### `PutWalletSecretConfig` <a name="PutWalletSecretConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.putWalletSecretConfig"></a>

```go
func PutWalletSecretConfig(value BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.putWalletSecretConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfig</a>

---

##### `ResetApiKeyId` <a name="ResetApiKeyId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.resetApiKeyId"></a>

```go
func ResetApiKeyId()
```

##### `ResetApiKeySecret` <a name="ResetApiKeySecret" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.resetApiKeySecret"></a>

```go
func ResetApiKeySecret()
```

##### `ResetApiKeySecretConfig` <a name="ResetApiKeySecretConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.resetApiKeySecretConfig"></a>

```go
func ResetApiKeySecretConfig()
```

##### `ResetApiKeySecretSource` <a name="ResetApiKeySecretSource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.resetApiKeySecretSource"></a>

```go
func ResetApiKeySecretSource()
```

##### `ResetWalletSecret` <a name="ResetWalletSecret" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.resetWalletSecret"></a>

```go
func ResetWalletSecret()
```

##### `ResetWalletSecretConfig` <a name="ResetWalletSecretConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.resetWalletSecretConfig"></a>

```go
func ResetWalletSecretConfig()
```

##### `ResetWalletSecretSource` <a name="ResetWalletSecretSource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.resetWalletSecretSource"></a>

```go
func ResetWalletSecretSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.apiKeySecretConfig">ApiKeySecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.walletSecretConfig">WalletSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.apiKeyIdInput">ApiKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.apiKeySecretConfigInput">ApiKeySecretConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.apiKeySecretInput">ApiKeySecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.apiKeySecretSourceInput">ApiKeySecretSourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.walletSecretConfigInput">WalletSecretConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.walletSecretInput">WalletSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.walletSecretSourceInput">WalletSecretSourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.apiKeyId">ApiKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.apiKeySecret">ApiKeySecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.apiKeySecretSource">ApiKeySecretSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.walletSecret">WalletSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.walletSecretSource">WalletSecretSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKeySecretConfig`<sup>Required</sup> <a name="ApiKeySecretConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.apiKeySecretConfig"></a>

```go
func ApiKeySecretConfig() BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationApiKeySecretConfigOutputReference</a>

---

##### `WalletSecretConfig`<sup>Required</sup> <a name="WalletSecretConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.walletSecretConfig"></a>

```go
func WalletSecretConfig() BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference</a>

---

##### `ApiKeyIdInput`<sup>Optional</sup> <a name="ApiKeyIdInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.apiKeyIdInput"></a>

```go
func ApiKeyIdInput() *string
```

- *Type:* *string

---

##### `ApiKeySecretConfigInput`<sup>Optional</sup> <a name="ApiKeySecretConfigInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.apiKeySecretConfigInput"></a>

```go
func ApiKeySecretConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ApiKeySecretInput`<sup>Optional</sup> <a name="ApiKeySecretInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.apiKeySecretInput"></a>

```go
func ApiKeySecretInput() *string
```

- *Type:* *string

---

##### `ApiKeySecretSourceInput`<sup>Optional</sup> <a name="ApiKeySecretSourceInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.apiKeySecretSourceInput"></a>

```go
func ApiKeySecretSourceInput() *string
```

- *Type:* *string

---

##### `WalletSecretConfigInput`<sup>Optional</sup> <a name="WalletSecretConfigInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.walletSecretConfigInput"></a>

```go
func WalletSecretConfigInput() interface{}
```

- *Type:* interface{}

---

##### `WalletSecretInput`<sup>Optional</sup> <a name="WalletSecretInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.walletSecretInput"></a>

```go
func WalletSecretInput() *string
```

- *Type:* *string

---

##### `WalletSecretSourceInput`<sup>Optional</sup> <a name="WalletSecretSourceInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.walletSecretSourceInput"></a>

```go
func WalletSecretSourceInput() *string
```

- *Type:* *string

---

##### `ApiKeyId`<sup>Required</sup> <a name="ApiKeyId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.apiKeyId"></a>

```go
func ApiKeyId() *string
```

- *Type:* *string

---

##### `ApiKeySecret`<sup>Required</sup> <a name="ApiKeySecret" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.apiKeySecret"></a>

```go
func ApiKeySecret() *string
```

- *Type:* *string

---

##### `ApiKeySecretSource`<sup>Required</sup> <a name="ApiKeySecretSource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.apiKeySecretSource"></a>

```go
func ApiKeySecretSource() *string
```

- *Type:* *string

---

##### `WalletSecret`<sup>Required</sup> <a name="WalletSecret" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.walletSecret"></a>

```go
func WalletSecret() *string
```

- *Type:* *string

---

##### `WalletSecretSource`<sup>Required</sup> <a name="WalletSecretSource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.walletSecretSource"></a>

```go
func WalletSecretSource() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorepaymentcredentialprovider"

bedrockagentcorepaymentcredentialprovider.NewBedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.resetJsonKey">ResetJsonKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.resetSecretId">ResetSecretId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetJsonKey` <a name="ResetJsonKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.resetJsonKey"></a>

```go
func ResetJsonKey()
```

##### `ResetSecretId` <a name="ResetSecretId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.resetSecretId"></a>

```go
func ResetSecretId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.property.jsonKeyInput">JsonKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.property.secretIdInput">SecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.property.jsonKey">JsonKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.property.secretId">SecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `JsonKeyInput`<sup>Optional</sup> <a name="JsonKeyInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.property.jsonKeyInput"></a>

```go
func JsonKeyInput() *string
```

- *Type:* *string

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.property.secretIdInput"></a>

```go
func SecretIdInput() *string
```

- *Type:* *string

---

##### `JsonKey`<sup>Required</sup> <a name="JsonKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.property.jsonKey"></a>

```go
func JsonKey() *string
```

- *Type:* *string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.property.secretId"></a>

```go
func SecretId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationWalletSecretConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorepaymentcredentialprovider"

bedrockagentcorepaymentcredentialprovider.NewBedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.putCoinbaseCdpConfiguration">PutCoinbaseCdpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.putStripePrivyConfiguration">PutStripePrivyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.resetCoinbaseCdpConfiguration">ResetCoinbaseCdpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.resetStripePrivyConfiguration">ResetStripePrivyConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCoinbaseCdpConfiguration` <a name="PutCoinbaseCdpConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.putCoinbaseCdpConfiguration"></a>

```go
func PutCoinbaseCdpConfiguration(value BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.putCoinbaseCdpConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfiguration</a>

---

##### `PutStripePrivyConfiguration` <a name="PutStripePrivyConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.putStripePrivyConfiguration"></a>

```go
func PutStripePrivyConfiguration(value BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.putStripePrivyConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfiguration</a>

---

##### `ResetCoinbaseCdpConfiguration` <a name="ResetCoinbaseCdpConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.resetCoinbaseCdpConfiguration"></a>

```go
func ResetCoinbaseCdpConfiguration()
```

##### `ResetStripePrivyConfiguration` <a name="ResetStripePrivyConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.resetStripePrivyConfiguration"></a>

```go
func ResetStripePrivyConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.coinbaseCdpConfiguration">CoinbaseCdpConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.stripePrivyConfiguration">StripePrivyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.coinbaseCdpConfigurationInput">CoinbaseCdpConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.stripePrivyConfigurationInput">StripePrivyConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CoinbaseCdpConfiguration`<sup>Required</sup> <a name="CoinbaseCdpConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.coinbaseCdpConfiguration"></a>

```go
func CoinbaseCdpConfiguration() BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputCoinbaseCdpConfigurationOutputReference</a>

---

##### `StripePrivyConfiguration`<sup>Required</sup> <a name="StripePrivyConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.stripePrivyConfiguration"></a>

```go
func StripePrivyConfiguration() BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference</a>

---

##### `CoinbaseCdpConfigurationInput`<sup>Optional</sup> <a name="CoinbaseCdpConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.coinbaseCdpConfigurationInput"></a>

```go
func CoinbaseCdpConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `StripePrivyConfigurationInput`<sup>Optional</sup> <a name="StripePrivyConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.stripePrivyConfigurationInput"></a>

```go
func StripePrivyConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorepaymentcredentialprovider"

bedrockagentcorepaymentcredentialprovider.NewBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.resetJsonKey">ResetJsonKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.resetSecretId">ResetSecretId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetJsonKey` <a name="ResetJsonKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.resetJsonKey"></a>

```go
func ResetJsonKey()
```

##### `ResetSecretId` <a name="ResetSecretId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.resetSecretId"></a>

```go
func ResetSecretId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.property.jsonKeyInput">JsonKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.property.secretIdInput">SecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.property.jsonKey">JsonKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.property.secretId">SecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `JsonKeyInput`<sup>Optional</sup> <a name="JsonKeyInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.property.jsonKeyInput"></a>

```go
func JsonKeyInput() *string
```

- *Type:* *string

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.property.secretIdInput"></a>

```go
func SecretIdInput() *string
```

- *Type:* *string

---

##### `JsonKey`<sup>Required</sup> <a name="JsonKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.property.jsonKey"></a>

```go
func JsonKey() *string
```

- *Type:* *string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.property.secretId"></a>

```go
func SecretId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorepaymentcredentialprovider"

bedrockagentcorepaymentcredentialprovider.NewBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.resetJsonKey">ResetJsonKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.resetSecretId">ResetSecretId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetJsonKey` <a name="ResetJsonKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.resetJsonKey"></a>

```go
func ResetJsonKey()
```

##### `ResetSecretId` <a name="ResetSecretId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.resetSecretId"></a>

```go
func ResetSecretId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.property.jsonKeyInput">JsonKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.property.secretIdInput">SecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.property.jsonKey">JsonKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.property.secretId">SecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `JsonKeyInput`<sup>Optional</sup> <a name="JsonKeyInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.property.jsonKeyInput"></a>

```go
func JsonKeyInput() *string
```

- *Type:* *string

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.property.secretIdInput"></a>

```go
func SecretIdInput() *string
```

- *Type:* *string

---

##### `JsonKey`<sup>Required</sup> <a name="JsonKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.property.jsonKey"></a>

```go
func JsonKey() *string
```

- *Type:* *string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.property.secretId"></a>

```go
func SecretId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorepaymentcredentialprovider"

bedrockagentcorepaymentcredentialprovider.NewBedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.putAppSecretConfig">PutAppSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.putAuthorizationPrivateKeyConfig">PutAuthorizationPrivateKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.resetAppId">ResetAppId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.resetAppSecret">ResetAppSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.resetAppSecretConfig">ResetAppSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.resetAppSecretSource">ResetAppSecretSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.resetAuthorizationId">ResetAuthorizationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.resetAuthorizationPrivateKey">ResetAuthorizationPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.resetAuthorizationPrivateKeyConfig">ResetAuthorizationPrivateKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.resetAuthorizationPrivateKeySource">ResetAuthorizationPrivateKeySource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAppSecretConfig` <a name="PutAppSecretConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.putAppSecretConfig"></a>

```go
func PutAppSecretConfig(value BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.putAppSecretConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfig</a>

---

##### `PutAuthorizationPrivateKeyConfig` <a name="PutAuthorizationPrivateKeyConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.putAuthorizationPrivateKeyConfig"></a>

```go
func PutAuthorizationPrivateKeyConfig(value BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.putAuthorizationPrivateKeyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfig</a>

---

##### `ResetAppId` <a name="ResetAppId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.resetAppId"></a>

```go
func ResetAppId()
```

##### `ResetAppSecret` <a name="ResetAppSecret" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.resetAppSecret"></a>

```go
func ResetAppSecret()
```

##### `ResetAppSecretConfig` <a name="ResetAppSecretConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.resetAppSecretConfig"></a>

```go
func ResetAppSecretConfig()
```

##### `ResetAppSecretSource` <a name="ResetAppSecretSource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.resetAppSecretSource"></a>

```go
func ResetAppSecretSource()
```

##### `ResetAuthorizationId` <a name="ResetAuthorizationId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.resetAuthorizationId"></a>

```go
func ResetAuthorizationId()
```

##### `ResetAuthorizationPrivateKey` <a name="ResetAuthorizationPrivateKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.resetAuthorizationPrivateKey"></a>

```go
func ResetAuthorizationPrivateKey()
```

##### `ResetAuthorizationPrivateKeyConfig` <a name="ResetAuthorizationPrivateKeyConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.resetAuthorizationPrivateKeyConfig"></a>

```go
func ResetAuthorizationPrivateKeyConfig()
```

##### `ResetAuthorizationPrivateKeySource` <a name="ResetAuthorizationPrivateKeySource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.resetAuthorizationPrivateKeySource"></a>

```go
func ResetAuthorizationPrivateKeySource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.appSecretConfig">AppSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.authorizationPrivateKeyConfig">AuthorizationPrivateKeyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.appIdInput">AppIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.appSecretConfigInput">AppSecretConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.appSecretInput">AppSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.appSecretSourceInput">AppSecretSourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.authorizationIdInput">AuthorizationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.authorizationPrivateKeyConfigInput">AuthorizationPrivateKeyConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.authorizationPrivateKeyInput">AuthorizationPrivateKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.authorizationPrivateKeySourceInput">AuthorizationPrivateKeySourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.appId">AppId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.appSecret">AppSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.appSecretSource">AppSecretSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.authorizationId">AuthorizationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.authorizationPrivateKey">AuthorizationPrivateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.authorizationPrivateKeySource">AuthorizationPrivateKeySource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppSecretConfig`<sup>Required</sup> <a name="AppSecretConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.appSecretConfig"></a>

```go
func AppSecretConfig() BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAppSecretConfigOutputReference</a>

---

##### `AuthorizationPrivateKeyConfig`<sup>Required</sup> <a name="AuthorizationPrivateKeyConfig" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.authorizationPrivateKeyConfig"></a>

```go
func AuthorizationPrivateKeyConfig() BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationAuthorizationPrivateKeyConfigOutputReference</a>

---

##### `AppIdInput`<sup>Optional</sup> <a name="AppIdInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.appIdInput"></a>

```go
func AppIdInput() *string
```

- *Type:* *string

---

##### `AppSecretConfigInput`<sup>Optional</sup> <a name="AppSecretConfigInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.appSecretConfigInput"></a>

```go
func AppSecretConfigInput() interface{}
```

- *Type:* interface{}

---

##### `AppSecretInput`<sup>Optional</sup> <a name="AppSecretInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.appSecretInput"></a>

```go
func AppSecretInput() *string
```

- *Type:* *string

---

##### `AppSecretSourceInput`<sup>Optional</sup> <a name="AppSecretSourceInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.appSecretSourceInput"></a>

```go
func AppSecretSourceInput() *string
```

- *Type:* *string

---

##### `AuthorizationIdInput`<sup>Optional</sup> <a name="AuthorizationIdInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.authorizationIdInput"></a>

```go
func AuthorizationIdInput() *string
```

- *Type:* *string

---

##### `AuthorizationPrivateKeyConfigInput`<sup>Optional</sup> <a name="AuthorizationPrivateKeyConfigInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.authorizationPrivateKeyConfigInput"></a>

```go
func AuthorizationPrivateKeyConfigInput() interface{}
```

- *Type:* interface{}

---

##### `AuthorizationPrivateKeyInput`<sup>Optional</sup> <a name="AuthorizationPrivateKeyInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.authorizationPrivateKeyInput"></a>

```go
func AuthorizationPrivateKeyInput() *string
```

- *Type:* *string

---

##### `AuthorizationPrivateKeySourceInput`<sup>Optional</sup> <a name="AuthorizationPrivateKeySourceInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.authorizationPrivateKeySourceInput"></a>

```go
func AuthorizationPrivateKeySourceInput() *string
```

- *Type:* *string

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.appId"></a>

```go
func AppId() *string
```

- *Type:* *string

---

##### `AppSecret`<sup>Required</sup> <a name="AppSecret" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.appSecret"></a>

```go
func AppSecret() *string
```

- *Type:* *string

---

##### `AppSecretSource`<sup>Required</sup> <a name="AppSecretSource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.appSecretSource"></a>

```go
func AppSecretSource() *string
```

- *Type:* *string

---

##### `AuthorizationId`<sup>Required</sup> <a name="AuthorizationId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.authorizationId"></a>

```go
func AuthorizationId() *string
```

- *Type:* *string

---

##### `AuthorizationPrivateKey`<sup>Required</sup> <a name="AuthorizationPrivateKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.authorizationPrivateKey"></a>

```go
func AuthorizationPrivateKey() *string
```

- *Type:* *string

---

##### `AuthorizationPrivateKeySource`<sup>Required</sup> <a name="AuthorizationPrivateKeySource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.authorizationPrivateKeySource"></a>

```go
func AuthorizationPrivateKeySource() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationInputStripePrivyConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorepaymentcredentialprovider"

bedrockagentcorepaymentcredentialprovider.NewBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.property.secretArn">SecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArn">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.property.secretArn"></a>

```go
func SecretArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference.property.internalValue"></a>

```go
func InternalValue() BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArn
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArn">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArn</a>

---


### BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorepaymentcredentialprovider"

bedrockagentcorepaymentcredentialprovider.NewBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.apiKeyId">ApiKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.apiKeySecretArn">ApiKeySecretArn</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.apiKeySecretJsonKey">ApiKeySecretJsonKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.apiKeySecretSource">ApiKeySecretSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.walletSecretArn">WalletSecretArn</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.walletSecretJsonKey">WalletSecretJsonKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.walletSecretSource">WalletSecretSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKeyId`<sup>Required</sup> <a name="ApiKeyId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.apiKeyId"></a>

```go
func ApiKeyId() *string
```

- *Type:* *string

---

##### `ApiKeySecretArn`<sup>Required</sup> <a name="ApiKeySecretArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.apiKeySecretArn"></a>

```go
func ApiKeySecretArn() BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationApiKeySecretArnOutputReference</a>

---

##### `ApiKeySecretJsonKey`<sup>Required</sup> <a name="ApiKeySecretJsonKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.apiKeySecretJsonKey"></a>

```go
func ApiKeySecretJsonKey() *string
```

- *Type:* *string

---

##### `ApiKeySecretSource`<sup>Required</sup> <a name="ApiKeySecretSource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.apiKeySecretSource"></a>

```go
func ApiKeySecretSource() *string
```

- *Type:* *string

---

##### `WalletSecretArn`<sup>Required</sup> <a name="WalletSecretArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.walletSecretArn"></a>

```go
func WalletSecretArn() BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference</a>

---

##### `WalletSecretJsonKey`<sup>Required</sup> <a name="WalletSecretJsonKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.walletSecretJsonKey"></a>

```go
func WalletSecretJsonKey() *string
```

- *Type:* *string

---

##### `WalletSecretSource`<sup>Required</sup> <a name="WalletSecretSource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.walletSecretSource"></a>

```go
func WalletSecretSource() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfiguration</a>

---


### BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorepaymentcredentialprovider"

bedrockagentcorepaymentcredentialprovider.NewBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.property.secretArn">SecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArn">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.property.secretArn"></a>

```go
func SecretArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArnOutputReference.property.internalValue"></a>

```go
func InternalValue() BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArn
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArn">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationWalletSecretArn</a>

---


### BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorepaymentcredentialprovider"

bedrockagentcorepaymentcredentialprovider.NewBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.property.coinbaseCdpConfiguration">CoinbaseCdpConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.property.stripePrivyConfiguration">StripePrivyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutput">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CoinbaseCdpConfiguration`<sup>Required</sup> <a name="CoinbaseCdpConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.property.coinbaseCdpConfiguration"></a>

```go
func CoinbaseCdpConfiguration() BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputCoinbaseCdpConfigurationOutputReference</a>

---

##### `StripePrivyConfiguration`<sup>Required</sup> <a name="StripePrivyConfiguration" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.property.stripePrivyConfiguration"></a>

```go
func StripePrivyConfiguration() BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() BedrockagentcorePaymentCredentialProviderProviderConfigurationOutput
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutput">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutput</a>

---


### BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorepaymentcredentialprovider"

bedrockagentcorepaymentcredentialprovider.NewBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.property.secretArn">SecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArn">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.property.secretArn"></a>

```go
func SecretArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference.property.internalValue"></a>

```go
func InternalValue() BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArn
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArn">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArn</a>

---


### BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorepaymentcredentialprovider"

bedrockagentcorepaymentcredentialprovider.NewBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.property.secretArn">SecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArn">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.property.secretArn"></a>

```go
func SecretArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference.property.internalValue"></a>

```go
func InternalValue() BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArn
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArn">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArn</a>

---


### BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference <a name="BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorepaymentcredentialprovider"

bedrockagentcorepaymentcredentialprovider.NewBedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.appId">AppId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.appSecretArn">AppSecretArn</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.appSecretJsonKey">AppSecretJsonKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.appSecretSource">AppSecretSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.authorizationId">AuthorizationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.authorizationPrivateKeyArn">AuthorizationPrivateKeyArn</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.authorizationPrivateKeyJsonKey">AuthorizationPrivateKeyJsonKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.authorizationPrivateKeySource">AuthorizationPrivateKeySource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.appId"></a>

```go
func AppId() *string
```

- *Type:* *string

---

##### `AppSecretArn`<sup>Required</sup> <a name="AppSecretArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.appSecretArn"></a>

```go
func AppSecretArn() BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAppSecretArnOutputReference</a>

---

##### `AppSecretJsonKey`<sup>Required</sup> <a name="AppSecretJsonKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.appSecretJsonKey"></a>

```go
func AppSecretJsonKey() *string
```

- *Type:* *string

---

##### `AppSecretSource`<sup>Required</sup> <a name="AppSecretSource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.appSecretSource"></a>

```go
func AppSecretSource() *string
```

- *Type:* *string

---

##### `AuthorizationId`<sup>Required</sup> <a name="AuthorizationId" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.authorizationId"></a>

```go
func AuthorizationId() *string
```

- *Type:* *string

---

##### `AuthorizationPrivateKeyArn`<sup>Required</sup> <a name="AuthorizationPrivateKeyArn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.authorizationPrivateKeyArn"></a>

```go
func AuthorizationPrivateKeyArn() BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationAuthorizationPrivateKeyArnOutputReference</a>

---

##### `AuthorizationPrivateKeyJsonKey`<sup>Required</sup> <a name="AuthorizationPrivateKeyJsonKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.authorizationPrivateKeyJsonKey"></a>

```go
func AuthorizationPrivateKeyJsonKey() *string
```

- *Type:* *string

---

##### `AuthorizationPrivateKeySource`<sup>Required</sup> <a name="AuthorizationPrivateKeySource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.authorizationPrivateKeySource"></a>

```go
func AuthorizationPrivateKeySource() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfiguration">BedrockagentcorePaymentCredentialProviderProviderConfigurationOutputStripePrivyConfiguration</a>

---


### BedrockagentcorePaymentCredentialProviderTagsList <a name="BedrockagentcorePaymentCredentialProviderTagsList" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorepaymentcredentialprovider"

bedrockagentcorepaymentcredentialprovider.NewBedrockagentcorePaymentCredentialProviderTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockagentcorePaymentCredentialProviderTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.get"></a>

```go
func Get(index *f64) BedrockagentcorePaymentCredentialProviderTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcorePaymentCredentialProviderTagsOutputReference <a name="BedrockagentcorePaymentCredentialProviderTagsOutputReference" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcorepaymentcredentialprovider"

bedrockagentcorepaymentcredentialprovider.NewBedrockagentcorePaymentCredentialProviderTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockagentcorePaymentCredentialProviderTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcorePaymentCredentialProvider.BedrockagentcorePaymentCredentialProviderTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



