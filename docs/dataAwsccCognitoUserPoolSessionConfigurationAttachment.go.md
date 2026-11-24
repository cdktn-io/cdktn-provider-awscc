# `dataAwsccCognitoUserPoolSessionConfigurationAttachment` Submodule <a name="`dataAwsccCognitoUserPoolSessionConfigurationAttachment` Submodule" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCognitoUserPoolSessionConfigurationAttachment <a name="DataAwsccCognitoUserPoolSessionConfigurationAttachment" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/cognito_user_pool_session_configuration_attachment awscc_cognito_user_pool_session_configuration_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscccognitouserpoolsessionconfigurationattachment"

dataawscccognitouserpoolsessionconfigurationattachment.NewDataAwsccCognitoUserPoolSessionConfigurationAttachment(scope Construct, id *string, config DataAwsccCognitoUserPoolSessionConfigurationAttachmentConfig) DataAwsccCognitoUserPoolSessionConfigurationAttachment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentConfig">DataAwsccCognitoUserPoolSessionConfigurationAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentConfig">DataAwsccCognitoUserPoolSessionConfigurationAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCognitoUserPoolSessionConfigurationAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscccognitouserpoolsessionconfigurationattachment"

dataawscccognitouserpoolsessionconfigurationattachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscccognitouserpoolsessionconfigurationattachment"

dataawscccognitouserpoolsessionconfigurationattachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscccognitouserpoolsessionconfigurationattachment"

dataawscccognitouserpoolsessionconfigurationattachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscccognitouserpoolsessionconfigurationattachment"

dataawscccognitouserpoolsessionconfigurationattachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccCognitoUserPoolSessionConfigurationAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccCognitoUserPoolSessionConfigurationAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccCognitoUserPoolSessionConfigurationAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/cognito_user_pool_session_configuration_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCognitoUserPoolSessionConfigurationAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.tokenSession">TokenSession</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference">DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.userPoolId">UserPoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.userSessionTracking">UserSessionTracking</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `TokenSession`<sup>Required</sup> <a name="TokenSession" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.tokenSession"></a>

```go
func TokenSession() DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference">DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference</a>

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.userPoolId"></a>

```go
func UserPoolId() *string
```

- *Type:* *string

---

##### `UserSessionTracking`<sup>Required</sup> <a name="UserSessionTracking" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.userSessionTracking"></a>

```go
func UserSessionTracking() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCognitoUserPoolSessionConfigurationAttachmentConfig <a name="DataAwsccCognitoUserPoolSessionConfigurationAttachmentConfig" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscccognitouserpoolsessionconfigurationattachment"

&dataawscccognitouserpoolsessionconfigurationattachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/cognito_user_pool_session_configuration_attachment#id DataAwsccCognitoUserPoolSessionConfigurationAttachment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSession <a name="DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSession" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSession"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSession.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscccognitouserpoolsessionconfigurationattachment"

&dataawscccognitouserpoolsessionconfigurationattachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSession {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference <a name="DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscccognitouserpoolsessionconfigurationattachment"

dataawscccognitouserpoolsessionconfigurationattachment.NewDataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.property.maxPerUser">MaxPerUser</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSession">DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSession</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxPerUser`<sup>Required</sup> <a name="MaxPerUser" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.property.maxPerUser"></a>

```go
func MaxPerUser() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSessionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSession
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolSessionConfigurationAttachment.DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSession">DataAwsccCognitoUserPoolSessionConfigurationAttachmentTokenSession</a>

---



