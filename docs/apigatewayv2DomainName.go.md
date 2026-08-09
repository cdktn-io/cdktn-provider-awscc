# `apigatewayv2DomainName` Submodule <a name="`apigatewayv2DomainName` Submodule" id="@cdktn/provider-awscc.apigatewayv2DomainName"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Apigatewayv2DomainName <a name="Apigatewayv2DomainName" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigatewayv2_domain_name awscc_apigatewayv2_domain_name}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayv2domainname"

apigatewayv2domainname.NewApigatewayv2DomainName(scope Construct, id *string, config Apigatewayv2DomainNameConfig) Apigatewayv2DomainName
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameConfig">Apigatewayv2DomainNameConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameConfig">Apigatewayv2DomainNameConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.putDomainNameConfigurations">PutDomainNameConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.putMutualTlsAuthentication">PutMutualTlsAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.resetDomainNameConfigurations">ResetDomainNameConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.resetMutualTlsAuthentication">ResetMutualTlsAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.resetRoutingMode">ResetRoutingMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDomainNameConfigurations` <a name="PutDomainNameConfigurations" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.putDomainNameConfigurations"></a>

```go
func PutDomainNameConfigurations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.putDomainNameConfigurations.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMutualTlsAuthentication` <a name="PutMutualTlsAuthentication" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.putMutualTlsAuthentication"></a>

```go
func PutMutualTlsAuthentication(value Apigatewayv2DomainNameMutualTlsAuthentication)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.putMutualTlsAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthentication">Apigatewayv2DomainNameMutualTlsAuthentication</a>

---

##### `ResetDomainNameConfigurations` <a name="ResetDomainNameConfigurations" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.resetDomainNameConfigurations"></a>

```go
func ResetDomainNameConfigurations()
```

##### `ResetMutualTlsAuthentication` <a name="ResetMutualTlsAuthentication" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.resetMutualTlsAuthentication"></a>

```go
func ResetMutualTlsAuthentication()
```

##### `ResetRoutingMode` <a name="ResetRoutingMode" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.resetRoutingMode"></a>

```go
func ResetRoutingMode()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Apigatewayv2DomainName resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayv2domainname"

apigatewayv2domainname.Apigatewayv2DomainName_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayv2domainname"

apigatewayv2domainname.Apigatewayv2DomainName_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayv2domainname"

apigatewayv2domainname.Apigatewayv2DomainName_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayv2domainname"

apigatewayv2domainname.Apigatewayv2DomainName_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Apigatewayv2DomainName resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Apigatewayv2DomainName to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Apigatewayv2DomainName that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigatewayv2_domain_name#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Apigatewayv2DomainName to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.domainNameArn">DomainNameArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.domainNameConfigurations">DomainNameConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsList">Apigatewayv2DomainNameDomainNameConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.mutualTlsAuthentication">MutualTlsAuthentication</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference">Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.regionalDomainName">RegionalDomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.regionalHostedZoneId">RegionalHostedZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.domainNameConfigurationsInput">DomainNameConfigurationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.domainNameInput">DomainNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.mutualTlsAuthenticationInput">MutualTlsAuthenticationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.routingModeInput">RoutingModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.routingMode">RoutingMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DomainNameArn`<sup>Required</sup> <a name="DomainNameArn" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.domainNameArn"></a>

```go
func DomainNameArn() *string
```

- *Type:* *string

---

##### `DomainNameConfigurations`<sup>Required</sup> <a name="DomainNameConfigurations" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.domainNameConfigurations"></a>

```go
func DomainNameConfigurations() Apigatewayv2DomainNameDomainNameConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsList">Apigatewayv2DomainNameDomainNameConfigurationsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MutualTlsAuthentication`<sup>Required</sup> <a name="MutualTlsAuthentication" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.mutualTlsAuthentication"></a>

```go
func MutualTlsAuthentication() Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference">Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference</a>

---

##### `RegionalDomainName`<sup>Required</sup> <a name="RegionalDomainName" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.regionalDomainName"></a>

```go
func RegionalDomainName() *string
```

- *Type:* *string

---

##### `RegionalHostedZoneId`<sup>Required</sup> <a name="RegionalHostedZoneId" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.regionalHostedZoneId"></a>

```go
func RegionalHostedZoneId() *string
```

- *Type:* *string

---

##### `DomainNameConfigurationsInput`<sup>Optional</sup> <a name="DomainNameConfigurationsInput" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.domainNameConfigurationsInput"></a>

```go
func DomainNameConfigurationsInput() interface{}
```

- *Type:* interface{}

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.domainNameInput"></a>

```go
func DomainNameInput() *string
```

- *Type:* *string

---

##### `MutualTlsAuthenticationInput`<sup>Optional</sup> <a name="MutualTlsAuthenticationInput" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.mutualTlsAuthenticationInput"></a>

```go
func MutualTlsAuthenticationInput() interface{}
```

- *Type:* interface{}

---

##### `RoutingModeInput`<sup>Optional</sup> <a name="RoutingModeInput" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.routingModeInput"></a>

```go
func RoutingModeInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `RoutingMode`<sup>Required</sup> <a name="RoutingMode" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.routingMode"></a>

```go
func RoutingMode() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainName.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Apigatewayv2DomainNameConfig <a name="Apigatewayv2DomainNameConfig" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayv2domainname"

&apigatewayv2domainname.Apigatewayv2DomainNameConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DomainName: *string,
	DomainNameConfigurations: interface{},
	MutualTlsAuthentication: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthentication,
	RoutingMode: *string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.domainName">DomainName</a></code> | <code>*string</code> | The custom domain name for your API in Amazon API Gateway. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.domainNameConfigurations">DomainNameConfigurations</a></code> | <code>interface{}</code> | The domain name configurations. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.mutualTlsAuthentication">MutualTlsAuthentication</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthentication">Apigatewayv2DomainNameMutualTlsAuthentication</a></code> | The mutual TLS authentication configuration for a custom domain name. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.routingMode">RoutingMode</a></code> | <code>*string</code> | The routing mode API Gateway uses to route traffic to your APIs. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | The collection of tags associated with a domain name. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.domainName"></a>

```go
DomainName *string
```

- *Type:* *string

The custom domain name for your API in Amazon API Gateway.

Uppercase letters and the underscore (`_`) character are not supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigatewayv2_domain_name#domain_name Apigatewayv2DomainName#domain_name}

---

##### `DomainNameConfigurations`<sup>Optional</sup> <a name="DomainNameConfigurations" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.domainNameConfigurations"></a>

```go
DomainNameConfigurations interface{}
```

- *Type:* interface{}

The domain name configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigatewayv2_domain_name#domain_name_configurations Apigatewayv2DomainName#domain_name_configurations}

---

##### `MutualTlsAuthentication`<sup>Optional</sup> <a name="MutualTlsAuthentication" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.mutualTlsAuthentication"></a>

```go
MutualTlsAuthentication Apigatewayv2DomainNameMutualTlsAuthentication
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthentication">Apigatewayv2DomainNameMutualTlsAuthentication</a>

The mutual TLS authentication configuration for a custom domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigatewayv2_domain_name#mutual_tls_authentication Apigatewayv2DomainName#mutual_tls_authentication}

---

##### `RoutingMode`<sup>Optional</sup> <a name="RoutingMode" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.routingMode"></a>

```go
RoutingMode *string
```

- *Type:* *string

The routing mode API Gateway uses to route traffic to your APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigatewayv2_domain_name#routing_mode Apigatewayv2DomainName#routing_mode}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

The collection of tags associated with a domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigatewayv2_domain_name#tags Apigatewayv2DomainName#tags}

---

### Apigatewayv2DomainNameDomainNameConfigurations <a name="Apigatewayv2DomainNameDomainNameConfigurations" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayv2domainname"

&apigatewayv2domainname.Apigatewayv2DomainNameDomainNameConfigurations {
	CertificateArn: *string,
	CertificateName: *string,
	EndpointType: *string,
	IpAddressType: *string,
	OwnershipVerificationCertificateArn: *string,
	SecurityPolicy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurations.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | An AWS-managed certificate that will be used by the edge-optimized endpoint for this domain name. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurations.property.certificateName">CertificateName</a></code> | <code>*string</code> | The user-friendly name of the certificate that will be used by the edge-optimized endpoint for this domain name. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurations.property.endpointType">EndpointType</a></code> | <code>*string</code> | The endpoint type. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurations.property.ipAddressType">IpAddressType</a></code> | <code>*string</code> | The IP address types that can invoke the domain name. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurations.property.ownershipVerificationCertificateArn">OwnershipVerificationCertificateArn</a></code> | <code>*string</code> | The Amazon resource name (ARN) for the public certificate issued by ACMlong. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurations.property.securityPolicy">SecurityPolicy</a></code> | <code>*string</code> | The Transport Layer Security (TLS) version of the security policy for this domain name. |

---

##### `CertificateArn`<sup>Optional</sup> <a name="CertificateArn" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurations.property.certificateArn"></a>

```go
CertificateArn *string
```

- *Type:* *string

An AWS-managed certificate that will be used by the edge-optimized endpoint for this domain name.

AWS Certificate Manager is the only supported source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigatewayv2_domain_name#certificate_arn Apigatewayv2DomainName#certificate_arn}

---

##### `CertificateName`<sup>Optional</sup> <a name="CertificateName" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurations.property.certificateName"></a>

```go
CertificateName *string
```

- *Type:* *string

The user-friendly name of the certificate that will be used by the edge-optimized endpoint for this domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigatewayv2_domain_name#certificate_name Apigatewayv2DomainName#certificate_name}

---

##### `EndpointType`<sup>Optional</sup> <a name="EndpointType" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurations.property.endpointType"></a>

```go
EndpointType *string
```

- *Type:* *string

The endpoint type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigatewayv2_domain_name#endpoint_type Apigatewayv2DomainName#endpoint_type}

---

##### `IpAddressType`<sup>Optional</sup> <a name="IpAddressType" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurations.property.ipAddressType"></a>

```go
IpAddressType *string
```

- *Type:* *string

The IP address types that can invoke the domain name.

Use `ipv4` to allow only IPv4 addresses to invoke your domain name, or use `dualstack` to allow both IPv4 and IPv6 addresses to invoke your domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigatewayv2_domain_name#ip_address_type Apigatewayv2DomainName#ip_address_type}

---

##### `OwnershipVerificationCertificateArn`<sup>Optional</sup> <a name="OwnershipVerificationCertificateArn" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurations.property.ownershipVerificationCertificateArn"></a>

```go
OwnershipVerificationCertificateArn *string
```

- *Type:* *string

The Amazon resource name (ARN) for the public certificate issued by ACMlong.

This ARN is used to validate custom domain ownership. It's required only if you configure mutual TLS and use either an ACM-imported or a private CA certificate ARN as the regionalCertificateArn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigatewayv2_domain_name#ownership_verification_certificate_arn Apigatewayv2DomainName#ownership_verification_certificate_arn}

---

##### `SecurityPolicy`<sup>Optional</sup> <a name="SecurityPolicy" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurations.property.securityPolicy"></a>

```go
SecurityPolicy *string
```

- *Type:* *string

The Transport Layer Security (TLS) version of the security policy for this domain name.

The valid values are `TLS_1_0` and `TLS_1_2`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigatewayv2_domain_name#security_policy Apigatewayv2DomainName#security_policy}

---

### Apigatewayv2DomainNameMutualTlsAuthentication <a name="Apigatewayv2DomainNameMutualTlsAuthentication" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthentication.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayv2domainname"

&apigatewayv2domainname.Apigatewayv2DomainNameMutualTlsAuthentication {
	TruststoreUri: *string,
	TruststoreVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthentication.property.truststoreUri">TruststoreUri</a></code> | <code>*string</code> | An Amazon S3 URL that specifies the truststore for mutual TLS authentication, for example, ``s3://bucket-name/key-name``. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthentication.property.truststoreVersion">TruststoreVersion</a></code> | <code>*string</code> | The version of the S3 object that contains your truststore. |

---

##### `TruststoreUri`<sup>Optional</sup> <a name="TruststoreUri" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthentication.property.truststoreUri"></a>

```go
TruststoreUri *string
```

- *Type:* *string

An Amazon S3 URL that specifies the truststore for mutual TLS authentication, for example, ``s3://bucket-name/key-name``.

The truststore can contain certificates from public or private certificate authorities. To update the truststore, upload a new version to S3, and then update your custom domain name to use the new version. To update the truststore, you must have permissions to access the S3 object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigatewayv2_domain_name#truststore_uri Apigatewayv2DomainName#truststore_uri}

---

##### `TruststoreVersion`<sup>Optional</sup> <a name="TruststoreVersion" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthentication.property.truststoreVersion"></a>

```go
TruststoreVersion *string
```

- *Type:* *string

The version of the S3 object that contains your truststore.

To specify a version, you must have versioning enabled for the S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigatewayv2_domain_name#truststore_version Apigatewayv2DomainName#truststore_version}

---

## Classes <a name="Classes" id="Classes"></a>

### Apigatewayv2DomainNameDomainNameConfigurationsList <a name="Apigatewayv2DomainNameDomainNameConfigurationsList" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayv2domainname"

apigatewayv2domainname.NewApigatewayv2DomainNameDomainNameConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Apigatewayv2DomainNameDomainNameConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsList.get"></a>

```go
func Get(index *f64) Apigatewayv2DomainNameDomainNameConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Apigatewayv2DomainNameDomainNameConfigurationsOutputReference <a name="Apigatewayv2DomainNameDomainNameConfigurationsOutputReference" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayv2domainname"

apigatewayv2domainname.NewApigatewayv2DomainNameDomainNameConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Apigatewayv2DomainNameDomainNameConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.resetCertificateArn">ResetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.resetCertificateName">ResetCertificateName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.resetEndpointType">ResetEndpointType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.resetIpAddressType">ResetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.resetOwnershipVerificationCertificateArn">ResetOwnershipVerificationCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.resetSecurityPolicy">ResetSecurityPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateArn` <a name="ResetCertificateArn" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.resetCertificateArn"></a>

```go
func ResetCertificateArn()
```

##### `ResetCertificateName` <a name="ResetCertificateName" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.resetCertificateName"></a>

```go
func ResetCertificateName()
```

##### `ResetEndpointType` <a name="ResetEndpointType" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.resetEndpointType"></a>

```go
func ResetEndpointType()
```

##### `ResetIpAddressType` <a name="ResetIpAddressType" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.resetIpAddressType"></a>

```go
func ResetIpAddressType()
```

##### `ResetOwnershipVerificationCertificateArn` <a name="ResetOwnershipVerificationCertificateArn" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.resetOwnershipVerificationCertificateArn"></a>

```go
func ResetOwnershipVerificationCertificateArn()
```

##### `ResetSecurityPolicy` <a name="ResetSecurityPolicy" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.resetSecurityPolicy"></a>

```go
func ResetSecurityPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.property.certificateArnInput">CertificateArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.property.certificateNameInput">CertificateNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.property.endpointTypeInput">EndpointTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.property.ipAddressTypeInput">IpAddressTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.property.ownershipVerificationCertificateArnInput">OwnershipVerificationCertificateArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.property.securityPolicyInput">SecurityPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.property.certificateName">CertificateName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.property.endpointType">EndpointType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.property.ipAddressType">IpAddressType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.property.ownershipVerificationCertificateArn">OwnershipVerificationCertificateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.property.securityPolicy">SecurityPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateArnInput`<sup>Optional</sup> <a name="CertificateArnInput" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.property.certificateArnInput"></a>

```go
func CertificateArnInput() *string
```

- *Type:* *string

---

##### `CertificateNameInput`<sup>Optional</sup> <a name="CertificateNameInput" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.property.certificateNameInput"></a>

```go
func CertificateNameInput() *string
```

- *Type:* *string

---

##### `EndpointTypeInput`<sup>Optional</sup> <a name="EndpointTypeInput" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.property.endpointTypeInput"></a>

```go
func EndpointTypeInput() *string
```

- *Type:* *string

---

##### `IpAddressTypeInput`<sup>Optional</sup> <a name="IpAddressTypeInput" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.property.ipAddressTypeInput"></a>

```go
func IpAddressTypeInput() *string
```

- *Type:* *string

---

##### `OwnershipVerificationCertificateArnInput`<sup>Optional</sup> <a name="OwnershipVerificationCertificateArnInput" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.property.ownershipVerificationCertificateArnInput"></a>

```go
func OwnershipVerificationCertificateArnInput() *string
```

- *Type:* *string

---

##### `SecurityPolicyInput`<sup>Optional</sup> <a name="SecurityPolicyInput" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.property.securityPolicyInput"></a>

```go
func SecurityPolicyInput() *string
```

- *Type:* *string

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.property.certificateArn"></a>

```go
func CertificateArn() *string
```

- *Type:* *string

---

##### `CertificateName`<sup>Required</sup> <a name="CertificateName" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.property.certificateName"></a>

```go
func CertificateName() *string
```

- *Type:* *string

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.property.endpointType"></a>

```go
func EndpointType() *string
```

- *Type:* *string

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.property.ipAddressType"></a>

```go
func IpAddressType() *string
```

- *Type:* *string

---

##### `OwnershipVerificationCertificateArn`<sup>Required</sup> <a name="OwnershipVerificationCertificateArn" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.property.ownershipVerificationCertificateArn"></a>

```go
func OwnershipVerificationCertificateArn() *string
```

- *Type:* *string

---

##### `SecurityPolicy`<sup>Required</sup> <a name="SecurityPolicy" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.property.securityPolicy"></a>

```go
func SecurityPolicy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference <a name="Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayv2domainname"

apigatewayv2domainname.NewApigatewayv2DomainNameMutualTlsAuthenticationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.resetTruststoreUri">ResetTruststoreUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.resetTruststoreVersion">ResetTruststoreVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTruststoreUri` <a name="ResetTruststoreUri" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.resetTruststoreUri"></a>

```go
func ResetTruststoreUri()
```

##### `ResetTruststoreVersion` <a name="ResetTruststoreVersion" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.resetTruststoreVersion"></a>

```go
func ResetTruststoreVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.truststoreUriInput">TruststoreUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.truststoreVersionInput">TruststoreVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.truststoreUri">TruststoreUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.truststoreVersion">TruststoreVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TruststoreUriInput`<sup>Optional</sup> <a name="TruststoreUriInput" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.truststoreUriInput"></a>

```go
func TruststoreUriInput() *string
```

- *Type:* *string

---

##### `TruststoreVersionInput`<sup>Optional</sup> <a name="TruststoreVersionInput" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.truststoreVersionInput"></a>

```go
func TruststoreVersionInput() *string
```

- *Type:* *string

---

##### `TruststoreUri`<sup>Required</sup> <a name="TruststoreUri" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.truststoreUri"></a>

```go
func TruststoreUri() *string
```

- *Type:* *string

---

##### `TruststoreVersion`<sup>Required</sup> <a name="TruststoreVersion" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.truststoreVersion"></a>

```go
func TruststoreVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



