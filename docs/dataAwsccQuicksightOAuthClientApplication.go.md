# `dataAwsccQuicksightOAuthClientApplication` Submodule <a name="`dataAwsccQuicksightOAuthClientApplication` Submodule" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccQuicksightOAuthClientApplication <a name="DataAwsccQuicksightOAuthClientApplication" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/quicksight_o_auth_client_application awscc_quicksight_o_auth_client_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightoauthclientapplication"

dataawsccquicksightoauthclientapplication.NewDataAwsccQuicksightOAuthClientApplication(scope Construct, id *string, config DataAwsccQuicksightOAuthClientApplicationConfig) DataAwsccQuicksightOAuthClientApplication
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationConfig">DataAwsccQuicksightOAuthClientApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationConfig">DataAwsccQuicksightOAuthClientApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccQuicksightOAuthClientApplication resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightoauthclientapplication"

dataawsccquicksightoauthclientapplication.DataAwsccQuicksightOAuthClientApplication_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightoauthclientapplication"

dataawsccquicksightoauthclientapplication.DataAwsccQuicksightOAuthClientApplication_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightoauthclientapplication"

dataawsccquicksightoauthclientapplication.DataAwsccQuicksightOAuthClientApplication_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightoauthclientapplication"

dataawsccquicksightoauthclientapplication.DataAwsccQuicksightOAuthClientApplication_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccQuicksightOAuthClientApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccQuicksightOAuthClientApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccQuicksightOAuthClientApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/quicksight_o_auth_client_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccQuicksightOAuthClientApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.property.createdTime">CreatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.property.dataSourceType">DataSourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.property.identityProviderVpcConnectionProperties">IdentityProviderVpcConnectionProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference">DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.property.lastUpdatedTime">LastUpdatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.property.oAuthAuthorizationEndpointUrl">OAuthAuthorizationEndpointUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.property.oAuthClientApplicationId">OAuthClientApplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.property.oAuthClientAuthenticationType">OAuthClientAuthenticationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.property.oAuthScopes">OAuthScopes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.property.oAuthTokenEndpointUrl">OAuthTokenEndpointUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsList">DataAwsccQuicksightOAuthClientApplicationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.property.createdTime"></a>

```go
func CreatedTime() *string
```

- *Type:* *string

---

##### `DataSourceType`<sup>Required</sup> <a name="DataSourceType" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.property.dataSourceType"></a>

```go
func DataSourceType() *string
```

- *Type:* *string

---

##### `IdentityProviderVpcConnectionProperties`<sup>Required</sup> <a name="IdentityProviderVpcConnectionProperties" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.property.identityProviderVpcConnectionProperties"></a>

```go
func IdentityProviderVpcConnectionProperties() DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference">DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference</a>

---

##### `LastUpdatedTime`<sup>Required</sup> <a name="LastUpdatedTime" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.property.lastUpdatedTime"></a>

```go
func LastUpdatedTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OAuthAuthorizationEndpointUrl`<sup>Required</sup> <a name="OAuthAuthorizationEndpointUrl" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.property.oAuthAuthorizationEndpointUrl"></a>

```go
func OAuthAuthorizationEndpointUrl() *string
```

- *Type:* *string

---

##### `OAuthClientApplicationId`<sup>Required</sup> <a name="OAuthClientApplicationId" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.property.oAuthClientApplicationId"></a>

```go
func OAuthClientApplicationId() *string
```

- *Type:* *string

---

##### `OAuthClientAuthenticationType`<sup>Required</sup> <a name="OAuthClientAuthenticationType" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.property.oAuthClientAuthenticationType"></a>

```go
func OAuthClientAuthenticationType() *string
```

- *Type:* *string

---

##### `OAuthScopes`<sup>Required</sup> <a name="OAuthScopes" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.property.oAuthScopes"></a>

```go
func OAuthScopes() *string
```

- *Type:* *string

---

##### `OAuthTokenEndpointUrl`<sup>Required</sup> <a name="OAuthTokenEndpointUrl" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.property.oAuthTokenEndpointUrl"></a>

```go
func OAuthTokenEndpointUrl() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.property.tags"></a>

```go
func Tags() DataAwsccQuicksightOAuthClientApplicationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsList">DataAwsccQuicksightOAuthClientApplicationTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplication.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccQuicksightOAuthClientApplicationConfig <a name="DataAwsccQuicksightOAuthClientApplicationConfig" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightoauthclientapplication"

&dataawsccquicksightoauthclientapplication.DataAwsccQuicksightOAuthClientApplicationConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/quicksight_o_auth_client_application#id DataAwsccQuicksightOAuthClientApplication#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties <a name="DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightoauthclientapplication"

&dataawsccquicksightoauthclientapplication.DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties {

}
```


### DataAwsccQuicksightOAuthClientApplicationTags <a name="DataAwsccQuicksightOAuthClientApplicationTags" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightoauthclientapplication"

&dataawsccquicksightoauthclientapplication.DataAwsccQuicksightOAuthClientApplicationTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference <a name="DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightoauthclientapplication"

dataawsccquicksightoauthclientapplication.NewDataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.property.vpcConnectionArn">VpcConnectionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties">DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VpcConnectionArn`<sup>Required</sup> <a name="VpcConnectionArn" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.property.vpcConnectionArn"></a>

```go
func VpcConnectionArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties">DataAwsccQuicksightOAuthClientApplicationIdentityProviderVpcConnectionProperties</a>

---


### DataAwsccQuicksightOAuthClientApplicationTagsList <a name="DataAwsccQuicksightOAuthClientApplicationTagsList" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightoauthclientapplication"

dataawsccquicksightoauthclientapplication.NewDataAwsccQuicksightOAuthClientApplicationTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccQuicksightOAuthClientApplicationTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsList.get"></a>

```go
func Get(index *f64) DataAwsccQuicksightOAuthClientApplicationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccQuicksightOAuthClientApplicationTagsOutputReference <a name="DataAwsccQuicksightOAuthClientApplicationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccquicksightoauthclientapplication"

dataawsccquicksightoauthclientapplication.NewDataAwsccQuicksightOAuthClientApplicationTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccQuicksightOAuthClientApplicationTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTags">DataAwsccQuicksightOAuthClientApplicationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccQuicksightOAuthClientApplicationTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightOAuthClientApplication.DataAwsccQuicksightOAuthClientApplicationTags">DataAwsccQuicksightOAuthClientApplicationTags</a>

---



