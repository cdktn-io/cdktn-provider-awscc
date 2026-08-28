# `dataAwsccCognitoIdentityPoolRoleAttachment` Submodule <a name="`dataAwsccCognitoIdentityPoolRoleAttachment` Submodule" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCognitoIdentityPoolRoleAttachment <a name="DataAwsccCognitoIdentityPoolRoleAttachment" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cognito_identity_pool_role_attachment awscc_cognito_identity_pool_role_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitoidentitypoolroleattachment"

dataawscccognitoidentitypoolroleattachment.NewDataAwsccCognitoIdentityPoolRoleAttachment(scope Construct, id *string, config DataAwsccCognitoIdentityPoolRoleAttachmentConfig) DataAwsccCognitoIdentityPoolRoleAttachment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentConfig">DataAwsccCognitoIdentityPoolRoleAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentConfig">DataAwsccCognitoIdentityPoolRoleAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCognitoIdentityPoolRoleAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitoidentitypoolroleattachment"

dataawscccognitoidentitypoolroleattachment.DataAwsccCognitoIdentityPoolRoleAttachment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitoidentitypoolroleattachment"

dataawscccognitoidentitypoolroleattachment.DataAwsccCognitoIdentityPoolRoleAttachment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitoidentitypoolroleattachment"

dataawscccognitoidentitypoolroleattachment.DataAwsccCognitoIdentityPoolRoleAttachment_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitoidentitypoolroleattachment"

dataawscccognitoidentitypoolroleattachment.DataAwsccCognitoIdentityPoolRoleAttachment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccCognitoIdentityPoolRoleAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccCognitoIdentityPoolRoleAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccCognitoIdentityPoolRoleAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cognito_identity_pool_role_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCognitoIdentityPoolRoleAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.identityPoolId">IdentityPoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.identityPoolRoleAttachmentId">IdentityPoolRoleAttachmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.roleMappings">RoleMappings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsMap">DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.roles">Roles</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `IdentityPoolId`<sup>Required</sup> <a name="IdentityPoolId" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.identityPoolId"></a>

```go
func IdentityPoolId() *string
```

- *Type:* *string

---

##### `IdentityPoolRoleAttachmentId`<sup>Required</sup> <a name="IdentityPoolRoleAttachmentId" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.identityPoolRoleAttachmentId"></a>

```go
func IdentityPoolRoleAttachmentId() *string
```

- *Type:* *string

---

##### `RoleMappings`<sup>Required</sup> <a name="RoleMappings" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.roleMappings"></a>

```go
func RoleMappings() DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsMap
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsMap">DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsMap</a>

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.roles"></a>

```go
func Roles() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCognitoIdentityPoolRoleAttachmentConfig <a name="DataAwsccCognitoIdentityPoolRoleAttachmentConfig" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitoidentitypoolroleattachment"

&dataawscccognitoidentitypoolroleattachment.DataAwsccCognitoIdentityPoolRoleAttachmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cognito_identity_pool_role_attachment#id DataAwsccCognitoIdentityPoolRoleAttachment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappings <a name="DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappings" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitoidentitypoolroleattachment"

&dataawscccognitoidentitypoolroleattachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappings {

}
```


### DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration <a name="DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitoidentitypoolroleattachment"

&dataawscccognitoidentitypoolroleattachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration {

}
```


### DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules <a name="DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitoidentitypoolroleattachment"

&dataawscccognitoidentitypoolroleattachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsMap <a name="DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsMap" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsMap.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitoidentitypoolroleattachment"

dataawscccognitoidentitypoolroleattachment.NewDataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsMap(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsMap
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsMap.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsMap.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsMap.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsMap.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsMap.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsMap.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsMap.get"></a>

```go
func Get(key *string) DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsMap.get.parameter.key"></a>

- *Type:* *string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsMap.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsMap.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsMap.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsMap.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference <a name="DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitoidentitypoolroleattachment"

dataawscccognitoidentitypoolroleattachment.NewDataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectKey *string) DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>*string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* *string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.ambiguousRoleResolution">AmbiguousRoleResolution</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.identityProvider">IdentityProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.rulesConfiguration">RulesConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference">DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappings">DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AmbiguousRoleResolution`<sup>Required</sup> <a name="AmbiguousRoleResolution" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.ambiguousRoleResolution"></a>

```go
func AmbiguousRoleResolution() *string
```

- *Type:* *string

---

##### `IdentityProvider`<sup>Required</sup> <a name="IdentityProvider" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.identityProvider"></a>

```go
func IdentityProvider() *string
```

- *Type:* *string

---

##### `RulesConfiguration`<sup>Required</sup> <a name="RulesConfiguration" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.rulesConfiguration"></a>

```go
func RulesConfiguration() DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference">DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappings">DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappings</a>

---


### DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference <a name="DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitoidentitypoolroleattachment"

dataawscccognitoidentitypoolroleattachment.NewDataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.property.rules">Rules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList">DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration">DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.property.rules"></a>

```go
func Rules() DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList">DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration">DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfiguration</a>

---


### DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList <a name="DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitoidentitypoolroleattachment"

dataawscccognitoidentitypoolroleattachment.NewDataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.get"></a>

```go
func Get(index *f64) DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference <a name="DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitoidentitypoolroleattachment"

dataawscccognitoidentitypoolroleattachment.NewDataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.claim">Claim</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.matchType">MatchType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules">DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Claim`<sup>Required</sup> <a name="Claim" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.claim"></a>

```go
func Claim() *string
```

- *Type:* *string

---

##### `MatchType`<sup>Required</sup> <a name="MatchType" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.matchType"></a>

```go
func MatchType() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPoolRoleAttachment.DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules">DataAwsccCognitoIdentityPoolRoleAttachmentRoleMappingsRulesConfigurationRules</a>

---



