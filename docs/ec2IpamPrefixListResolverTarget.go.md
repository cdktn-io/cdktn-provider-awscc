# `ec2IpamPrefixListResolverTarget` Submodule <a name="`ec2IpamPrefixListResolverTarget` Submodule" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2IpamPrefixListResolverTarget <a name="Ec2IpamPrefixListResolverTarget" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_prefix_list_resolver_target awscc_ec2_ipam_prefix_list_resolver_target}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2ipamprefixlistresolvertarget"

ec2ipamprefixlistresolvertarget.NewEc2IpamPrefixListResolverTarget(scope Construct, id *string, config Ec2IpamPrefixListResolverTargetConfig) Ec2IpamPrefixListResolverTarget
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig">Ec2IpamPrefixListResolverTargetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig">Ec2IpamPrefixListResolverTargetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.resetDesiredVersion">ResetDesiredVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDesiredVersion` <a name="ResetDesiredVersion" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.resetDesiredVersion"></a>

```go
func ResetDesiredVersion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2IpamPrefixListResolverTarget resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2ipamprefixlistresolvertarget"

ec2ipamprefixlistresolvertarget.Ec2IpamPrefixListResolverTarget_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2ipamprefixlistresolvertarget"

ec2ipamprefixlistresolvertarget.Ec2IpamPrefixListResolverTarget_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2ipamprefixlistresolvertarget"

ec2ipamprefixlistresolvertarget.Ec2IpamPrefixListResolverTarget_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2ipamprefixlistresolvertarget"

ec2ipamprefixlistresolvertarget.Ec2IpamPrefixListResolverTarget_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Ec2IpamPrefixListResolverTarget resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Ec2IpamPrefixListResolverTarget to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Ec2IpamPrefixListResolverTarget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_prefix_list_resolver_target#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Ec2IpamPrefixListResolverTarget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.ipamPrefixListResolverTargetArn">IpamPrefixListResolverTargetArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.ipamPrefixListResolverTargetId">IpamPrefixListResolverTargetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList">Ec2IpamPrefixListResolverTargetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.desiredVersionInput">DesiredVersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.ipamPrefixListResolverIdInput">IpamPrefixListResolverIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.prefixListIdInput">PrefixListIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.prefixListRegionInput">PrefixListRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.trackLatestVersionInput">TrackLatestVersionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.desiredVersion">DesiredVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.ipamPrefixListResolverId">IpamPrefixListResolverId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.prefixListId">PrefixListId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.prefixListRegion">PrefixListRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.trackLatestVersion">TrackLatestVersion</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpamPrefixListResolverTargetArn`<sup>Required</sup> <a name="IpamPrefixListResolverTargetArn" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.ipamPrefixListResolverTargetArn"></a>

```go
func IpamPrefixListResolverTargetArn() *string
```

- *Type:* *string

---

##### `IpamPrefixListResolverTargetId`<sup>Required</sup> <a name="IpamPrefixListResolverTargetId" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.ipamPrefixListResolverTargetId"></a>

```go
func IpamPrefixListResolverTargetId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.tags"></a>

```go
func Tags() Ec2IpamPrefixListResolverTargetTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList">Ec2IpamPrefixListResolverTargetTagsList</a>

---

##### `DesiredVersionInput`<sup>Optional</sup> <a name="DesiredVersionInput" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.desiredVersionInput"></a>

```go
func DesiredVersionInput() *f64
```

- *Type:* *f64

---

##### `IpamPrefixListResolverIdInput`<sup>Optional</sup> <a name="IpamPrefixListResolverIdInput" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.ipamPrefixListResolverIdInput"></a>

```go
func IpamPrefixListResolverIdInput() *string
```

- *Type:* *string

---

##### `PrefixListIdInput`<sup>Optional</sup> <a name="PrefixListIdInput" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.prefixListIdInput"></a>

```go
func PrefixListIdInput() *string
```

- *Type:* *string

---

##### `PrefixListRegionInput`<sup>Optional</sup> <a name="PrefixListRegionInput" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.prefixListRegionInput"></a>

```go
func PrefixListRegionInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TrackLatestVersionInput`<sup>Optional</sup> <a name="TrackLatestVersionInput" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.trackLatestVersionInput"></a>

```go
func TrackLatestVersionInput() interface{}
```

- *Type:* interface{}

---

##### `DesiredVersion`<sup>Required</sup> <a name="DesiredVersion" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.desiredVersion"></a>

```go
func DesiredVersion() *f64
```

- *Type:* *f64

---

##### `IpamPrefixListResolverId`<sup>Required</sup> <a name="IpamPrefixListResolverId" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.ipamPrefixListResolverId"></a>

```go
func IpamPrefixListResolverId() *string
```

- *Type:* *string

---

##### `PrefixListId`<sup>Required</sup> <a name="PrefixListId" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.prefixListId"></a>

```go
func PrefixListId() *string
```

- *Type:* *string

---

##### `PrefixListRegion`<sup>Required</sup> <a name="PrefixListRegion" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.prefixListRegion"></a>

```go
func PrefixListRegion() *string
```

- *Type:* *string

---

##### `TrackLatestVersion`<sup>Required</sup> <a name="TrackLatestVersion" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.trackLatestVersion"></a>

```go
func TrackLatestVersion() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2IpamPrefixListResolverTargetConfig <a name="Ec2IpamPrefixListResolverTargetConfig" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2ipamprefixlistresolvertarget"

&ec2ipamprefixlistresolvertarget.Ec2IpamPrefixListResolverTargetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	IpamPrefixListResolverId: *string,
	PrefixListId: *string,
	PrefixListRegion: *string,
	TrackLatestVersion: interface{},
	DesiredVersion: *f64,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.ipamPrefixListResolverId">IpamPrefixListResolverId</a></code> | <code>*string</code> | The Id of the IPAM Prefix List Resolver associated with this Target. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.prefixListId">PrefixListId</a></code> | <code>*string</code> | The Id of the Managed Prefix List. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.prefixListRegion">PrefixListRegion</a></code> | <code>*string</code> | The region that the Managed Prefix List is located in. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.trackLatestVersion">TrackLatestVersion</a></code> | <code>interface{}</code> | Indicates whether this Target automatically tracks the latest version of the Prefix List Resolver. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.desiredVersion">DesiredVersion</a></code> | <code>*f64</code> | The desired version of the Prefix List Resolver that this Target should synchronize with. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IpamPrefixListResolverId`<sup>Required</sup> <a name="IpamPrefixListResolverId" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.ipamPrefixListResolverId"></a>

```go
IpamPrefixListResolverId *string
```

- *Type:* *string

The Id of the IPAM Prefix List Resolver associated with this Target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_prefix_list_resolver_target#ipam_prefix_list_resolver_id Ec2IpamPrefixListResolverTarget#ipam_prefix_list_resolver_id}

---

##### `PrefixListId`<sup>Required</sup> <a name="PrefixListId" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.prefixListId"></a>

```go
PrefixListId *string
```

- *Type:* *string

The Id of the Managed Prefix List.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_prefix_list_resolver_target#prefix_list_id Ec2IpamPrefixListResolverTarget#prefix_list_id}

---

##### `PrefixListRegion`<sup>Required</sup> <a name="PrefixListRegion" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.prefixListRegion"></a>

```go
PrefixListRegion *string
```

- *Type:* *string

The region that the Managed Prefix List is located in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_prefix_list_resolver_target#prefix_list_region Ec2IpamPrefixListResolverTarget#prefix_list_region}

---

##### `TrackLatestVersion`<sup>Required</sup> <a name="TrackLatestVersion" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.trackLatestVersion"></a>

```go
TrackLatestVersion interface{}
```

- *Type:* interface{}

Indicates whether this Target automatically tracks the latest version of the Prefix List Resolver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_prefix_list_resolver_target#track_latest_version Ec2IpamPrefixListResolverTarget#track_latest_version}

---

##### `DesiredVersion`<sup>Optional</sup> <a name="DesiredVersion" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.desiredVersion"></a>

```go
DesiredVersion *f64
```

- *Type:* *f64

The desired version of the Prefix List Resolver that this Target should synchronize with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_prefix_list_resolver_target#desired_version Ec2IpamPrefixListResolverTarget#desired_version}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_prefix_list_resolver_target#tags Ec2IpamPrefixListResolverTarget#tags}

---

### Ec2IpamPrefixListResolverTargetTags <a name="Ec2IpamPrefixListResolverTargetTags" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2ipamprefixlistresolvertarget"

&ec2ipamprefixlistresolvertarget.Ec2IpamPrefixListResolverTargetTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_prefix_list_resolver_target#key Ec2IpamPrefixListResolverTarget#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam_prefix_list_resolver_target#value Ec2IpamPrefixListResolverTarget#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2IpamPrefixListResolverTargetTagsList <a name="Ec2IpamPrefixListResolverTargetTagsList" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2ipamprefixlistresolvertarget"

ec2ipamprefixlistresolvertarget.NewEc2IpamPrefixListResolverTargetTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Ec2IpamPrefixListResolverTargetTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.get"></a>

```go
func Get(index *f64) Ec2IpamPrefixListResolverTargetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2IpamPrefixListResolverTargetTagsOutputReference <a name="Ec2IpamPrefixListResolverTargetTagsOutputReference" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2ipamprefixlistresolvertarget"

ec2ipamprefixlistresolvertarget.NewEc2IpamPrefixListResolverTargetTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Ec2IpamPrefixListResolverTargetTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



