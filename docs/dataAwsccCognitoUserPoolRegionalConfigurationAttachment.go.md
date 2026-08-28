# `dataAwsccCognitoUserPoolRegionalConfigurationAttachment` Submodule <a name="`dataAwsccCognitoUserPoolRegionalConfigurationAttachment` Submodule" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCognitoUserPoolRegionalConfigurationAttachment <a name="DataAwsccCognitoUserPoolRegionalConfigurationAttachment" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cognito_user_pool_regional_configuration_attachment awscc_cognito_user_pool_regional_configuration_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitouserpoolregionalconfigurationattachment"

dataawscccognitouserpoolregionalconfigurationattachment.NewDataAwsccCognitoUserPoolRegionalConfigurationAttachment(scope Construct, id *string, config DataAwsccCognitoUserPoolRegionalConfigurationAttachmentConfig) DataAwsccCognitoUserPoolRegionalConfigurationAttachment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentConfig">DataAwsccCognitoUserPoolRegionalConfigurationAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentConfig">DataAwsccCognitoUserPoolRegionalConfigurationAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCognitoUserPoolRegionalConfigurationAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitouserpoolregionalconfigurationattachment"

dataawscccognitouserpoolregionalconfigurationattachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitouserpoolregionalconfigurationattachment"

dataawscccognitouserpoolregionalconfigurationattachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitouserpoolregionalconfigurationattachment"

dataawscccognitouserpoolregionalconfigurationattachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitouserpoolregionalconfigurationattachment"

dataawscccognitouserpoolregionalconfigurationattachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccCognitoUserPoolRegionalConfigurationAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccCognitoUserPoolRegionalConfigurationAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccCognitoUserPoolRegionalConfigurationAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cognito_user_pool_regional_configuration_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCognitoUserPoolRegionalConfigurationAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.emailConfiguration">EmailConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference">DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.lambdaConfig">LambdaConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference">DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.smsConfiguration">SmsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference">DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.userPoolId">UserPoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.userPoolTags">UserPoolTags</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `EmailConfiguration`<sup>Required</sup> <a name="EmailConfiguration" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.emailConfiguration"></a>

```go
func EmailConfiguration() DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference">DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference</a>

---

##### `LambdaConfig`<sup>Required</sup> <a name="LambdaConfig" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.lambdaConfig"></a>

```go
func LambdaConfig() DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference">DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference</a>

---

##### `SmsConfiguration`<sup>Required</sup> <a name="SmsConfiguration" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.smsConfiguration"></a>

```go
func SmsConfiguration() DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference">DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.userPoolId"></a>

```go
func UserPoolId() *string
```

- *Type:* *string

---

##### `UserPoolTags`<sup>Required</sup> <a name="UserPoolTags" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.userPoolTags"></a>

```go
func UserPoolTags() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCognitoUserPoolRegionalConfigurationAttachmentConfig <a name="DataAwsccCognitoUserPoolRegionalConfigurationAttachmentConfig" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitouserpoolregionalconfigurationattachment"

&dataawscccognitouserpoolregionalconfigurationattachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cognito_user_pool_regional_configuration_attachment#id DataAwsccCognitoUserPoolRegionalConfigurationAttachment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration <a name="DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitouserpoolregionalconfigurationattachment"

&dataawscccognitouserpoolregionalconfigurationattachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration {

}
```


### DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfig <a name="DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfig" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitouserpoolregionalconfigurationattachment"

&dataawscccognitouserpoolregionalconfigurationattachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfig {

}
```


### DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender <a name="DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitouserpoolregionalconfigurationattachment"

&dataawscccognitouserpoolregionalconfigurationattachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender {

}
```


### DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender <a name="DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitouserpoolregionalconfigurationattachment"

&dataawscccognitouserpoolregionalconfigurationattachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender {

}
```


### DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation <a name="DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitouserpoolregionalconfigurationattachment"

&dataawscccognitouserpoolregionalconfigurationattachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation {

}
```


### DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig <a name="DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitouserpoolregionalconfigurationattachment"

&dataawscccognitouserpoolregionalconfigurationattachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig {

}
```


### DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration <a name="DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitouserpoolregionalconfigurationattachment"

&dataawscccognitouserpoolregionalconfigurationattachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration {

}
```


### DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms <a name="DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitouserpoolregionalconfigurationattachment"

&dataawscccognitouserpoolregionalconfigurationattachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference <a name="DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitouserpoolregionalconfigurationattachment"

dataawscccognitouserpoolregionalconfigurationattachment.NewDataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.configurationSet">ConfigurationSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.emailSendingAccount">EmailSendingAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.from">From</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.replyToEmailAddress">ReplyToEmailAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.sourceArn">SourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration">DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConfigurationSet`<sup>Required</sup> <a name="ConfigurationSet" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.configurationSet"></a>

```go
func ConfigurationSet() *string
```

- *Type:* *string

---

##### `EmailSendingAccount`<sup>Required</sup> <a name="EmailSendingAccount" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.emailSendingAccount"></a>

```go
func EmailSendingAccount() *string
```

- *Type:* *string

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.from"></a>

```go
func From() *string
```

- *Type:* *string

---

##### `ReplyToEmailAddress`<sup>Required</sup> <a name="ReplyToEmailAddress" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.replyToEmailAddress"></a>

```go
func ReplyToEmailAddress() *string
```

- *Type:* *string

---

##### `SourceArn`<sup>Required</sup> <a name="SourceArn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.sourceArn"></a>

```go
func SourceArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration">DataAwsccCognitoUserPoolRegionalConfigurationAttachmentEmailConfiguration</a>

---


### DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference <a name="DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitouserpoolregionalconfigurationattachment"

dataawscccognitouserpoolregionalconfigurationattachment.NewDataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.lambdaArn">LambdaArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.lambdaVersion">LambdaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender">DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LambdaArn`<sup>Required</sup> <a name="LambdaArn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.lambdaArn"></a>

```go
func LambdaArn() *string
```

- *Type:* *string

---

##### `LambdaVersion`<sup>Required</sup> <a name="LambdaVersion" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.lambdaVersion"></a>

```go
func LambdaVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender">DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSender</a>

---


### DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference <a name="DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitouserpoolregionalconfigurationattachment"

dataawscccognitouserpoolregionalconfigurationattachment.NewDataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.lambdaArn">LambdaArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.lambdaVersion">LambdaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender">DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LambdaArn`<sup>Required</sup> <a name="LambdaArn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.lambdaArn"></a>

```go
func LambdaArn() *string
```

- *Type:* *string

---

##### `LambdaVersion`<sup>Required</sup> <a name="LambdaVersion" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.lambdaVersion"></a>

```go
func LambdaVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender">DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSender</a>

---


### DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference <a name="DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitouserpoolregionalconfigurationattachment"

dataawscccognitouserpoolregionalconfigurationattachment.NewDataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.lambdaArn">LambdaArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.lambdaVersion">LambdaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation">DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LambdaArn`<sup>Required</sup> <a name="LambdaArn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.lambdaArn"></a>

```go
func LambdaArn() *string
```

- *Type:* *string

---

##### `LambdaVersion`<sup>Required</sup> <a name="LambdaVersion" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.lambdaVersion"></a>

```go
func LambdaVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation">DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederation</a>

---


### DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference <a name="DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitouserpoolregionalconfigurationattachment"

dataawscccognitouserpoolregionalconfigurationattachment.NewDataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.createAuthChallenge">CreateAuthChallenge</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customEmailSender">CustomEmailSender</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference">DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customMessage">CustomMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customSmsSender">CustomSmsSender</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference">DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.defineAuthChallenge">DefineAuthChallenge</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.inboundFederation">InboundFederation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference">DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.postAuthentication">PostAuthentication</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.postConfirmation">PostConfirmation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preAuthentication">PreAuthentication</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preSignUp">PreSignUp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preTokenGeneration">PreTokenGeneration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preTokenGenerationConfig">PreTokenGenerationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference">DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.userMigration">UserMigration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.verifyAuthChallengeResponse">VerifyAuthChallengeResponse</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfig">DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateAuthChallenge`<sup>Required</sup> <a name="CreateAuthChallenge" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.createAuthChallenge"></a>

```go
func CreateAuthChallenge() *string
```

- *Type:* *string

---

##### `CustomEmailSender`<sup>Required</sup> <a name="CustomEmailSender" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customEmailSender"></a>

```go
func CustomEmailSender() DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference">DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomEmailSenderOutputReference</a>

---

##### `CustomMessage`<sup>Required</sup> <a name="CustomMessage" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customMessage"></a>

```go
func CustomMessage() *string
```

- *Type:* *string

---

##### `CustomSmsSender`<sup>Required</sup> <a name="CustomSmsSender" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.customSmsSender"></a>

```go
func CustomSmsSender() DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference">DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigCustomSmsSenderOutputReference</a>

---

##### `DefineAuthChallenge`<sup>Required</sup> <a name="DefineAuthChallenge" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.defineAuthChallenge"></a>

```go
func DefineAuthChallenge() *string
```

- *Type:* *string

---

##### `InboundFederation`<sup>Required</sup> <a name="InboundFederation" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.inboundFederation"></a>

```go
func InboundFederation() DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference">DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigInboundFederationOutputReference</a>

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `PostAuthentication`<sup>Required</sup> <a name="PostAuthentication" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.postAuthentication"></a>

```go
func PostAuthentication() *string
```

- *Type:* *string

---

##### `PostConfirmation`<sup>Required</sup> <a name="PostConfirmation" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.postConfirmation"></a>

```go
func PostConfirmation() *string
```

- *Type:* *string

---

##### `PreAuthentication`<sup>Required</sup> <a name="PreAuthentication" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preAuthentication"></a>

```go
func PreAuthentication() *string
```

- *Type:* *string

---

##### `PreSignUp`<sup>Required</sup> <a name="PreSignUp" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preSignUp"></a>

```go
func PreSignUp() *string
```

- *Type:* *string

---

##### `PreTokenGeneration`<sup>Required</sup> <a name="PreTokenGeneration" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preTokenGeneration"></a>

```go
func PreTokenGeneration() *string
```

- *Type:* *string

---

##### `PreTokenGenerationConfig`<sup>Required</sup> <a name="PreTokenGenerationConfig" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.preTokenGenerationConfig"></a>

```go
func PreTokenGenerationConfig() DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference">DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference</a>

---

##### `UserMigration`<sup>Required</sup> <a name="UserMigration" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.userMigration"></a>

```go
func UserMigration() *string
```

- *Type:* *string

---

##### `VerifyAuthChallengeResponse`<sup>Required</sup> <a name="VerifyAuthChallengeResponse" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.verifyAuthChallengeResponse"></a>

```go
func VerifyAuthChallengeResponse() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfig">DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfig</a>

---


### DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference <a name="DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitouserpoolregionalconfigurationattachment"

dataawscccognitouserpoolregionalconfigurationattachment.NewDataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.lambdaArn">LambdaArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.lambdaVersion">LambdaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig">DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LambdaArn`<sup>Required</sup> <a name="LambdaArn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.lambdaArn"></a>

```go
func LambdaArn() *string
```

- *Type:* *string

---

##### `LambdaVersion`<sup>Required</sup> <a name="LambdaVersion" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.lambdaVersion"></a>

```go
func LambdaVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig">DataAwsccCognitoUserPoolRegionalConfigurationAttachmentLambdaConfigPreTokenGenerationConfig</a>

---


### DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference <a name="DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitouserpoolregionalconfigurationattachment"

dataawscccognitouserpoolregionalconfigurationattachment.NewDataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.callerArn">CallerArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.configurationSetName">ConfigurationSetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.externalId">ExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.inEntityId">InEntityId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.inTemplateId">InTemplateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.originationIdentity">OriginationIdentity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms">DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CallerArn`<sup>Required</sup> <a name="CallerArn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.callerArn"></a>

```go
func CallerArn() *string
```

- *Type:* *string

---

##### `ConfigurationSetName`<sup>Required</sup> <a name="ConfigurationSetName" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.configurationSetName"></a>

```go
func ConfigurationSetName() *string
```

- *Type:* *string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.externalId"></a>

```go
func ExternalId() *string
```

- *Type:* *string

---

##### `InEntityId`<sup>Required</sup> <a name="InEntityId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.inEntityId"></a>

```go
func InEntityId() *string
```

- *Type:* *string

---

##### `InTemplateId`<sup>Required</sup> <a name="InTemplateId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.inTemplateId"></a>

```go
func InTemplateId() *string
```

- *Type:* *string

---

##### `OriginationIdentity`<sup>Required</sup> <a name="OriginationIdentity" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.originationIdentity"></a>

```go
func OriginationIdentity() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms">DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSms</a>

---


### DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference <a name="DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccognitouserpoolregionalconfigurationattachment"

dataawscccognitouserpoolregionalconfigurationattachment.NewDataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.eumsSms">EumsSms</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference">DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.externalId">ExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.snsCallerArn">SnsCallerArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.snsRegion">SnsRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration">DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EumsSms`<sup>Required</sup> <a name="EumsSms" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.eumsSms"></a>

```go
func EumsSms() DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference">DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationEumsSmsOutputReference</a>

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.externalId"></a>

```go
func ExternalId() *string
```

- *Type:* *string

---

##### `SnsCallerArn`<sup>Required</sup> <a name="SnsCallerArn" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.snsCallerArn"></a>

```go
func SnsCallerArn() *string
```

- *Type:* *string

---

##### `SnsRegion`<sup>Required</sup> <a name="SnsRegion" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.snsRegion"></a>

```go
func SnsRegion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoUserPoolRegionalConfigurationAttachment.DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration">DataAwsccCognitoUserPoolRegionalConfigurationAttachmentSmsConfiguration</a>

---



