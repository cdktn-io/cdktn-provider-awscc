# `dataAwsccRedshiftRedshiftIdcApplication` Submodule <a name="`dataAwsccRedshiftRedshiftIdcApplication` Submodule" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRedshiftRedshiftIdcApplication <a name="DataAwsccRedshiftRedshiftIdcApplication" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/redshift_redshift_idc_application awscc_redshift_redshift_idc_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftredshiftidcapplication"

dataawsccredshiftredshiftidcapplication.NewDataAwsccRedshiftRedshiftIdcApplication(scope Construct, id *string, config DataAwsccRedshiftRedshiftIdcApplicationConfig) DataAwsccRedshiftRedshiftIdcApplication
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationConfig">DataAwsccRedshiftRedshiftIdcApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationConfig">DataAwsccRedshiftRedshiftIdcApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccRedshiftRedshiftIdcApplication resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftredshiftidcapplication"

dataawsccredshiftredshiftidcapplication.DataAwsccRedshiftRedshiftIdcApplication_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftredshiftidcapplication"

dataawsccredshiftredshiftidcapplication.DataAwsccRedshiftRedshiftIdcApplication_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftredshiftidcapplication"

dataawsccredshiftredshiftidcapplication.DataAwsccRedshiftRedshiftIdcApplication_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftredshiftidcapplication"

dataawsccredshiftredshiftidcapplication.DataAwsccRedshiftRedshiftIdcApplication_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccRedshiftRedshiftIdcApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccRedshiftRedshiftIdcApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccRedshiftRedshiftIdcApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/redshift_redshift_idc_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRedshiftRedshiftIdcApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.applicationType">ApplicationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.authorizedTokenIssuerList">AuthorizedTokenIssuerList</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList">DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.iamRoleArn">IamRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.idcDisplayName">IdcDisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.idcInstanceArn">IdcInstanceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.idcManagedApplicationArn">IdcManagedApplicationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.idcOnboardStatus">IdcOnboardStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.identityNamespace">IdentityNamespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.redshiftIdcApplicationArn">RedshiftIdcApplicationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.redshiftIdcApplicationName">RedshiftIdcApplicationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.serviceIntegrations">ServiceIntegrations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsList">DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.ssoTagKeys">SsoTagKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsList">DataAwsccRedshiftRedshiftIdcApplicationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ApplicationType`<sup>Required</sup> <a name="ApplicationType" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.applicationType"></a>

```go
func ApplicationType() *string
```

- *Type:* *string

---

##### `AuthorizedTokenIssuerList`<sup>Required</sup> <a name="AuthorizedTokenIssuerList" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.authorizedTokenIssuerList"></a>

```go
func AuthorizedTokenIssuerList() DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList">DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList</a>

---

##### `IamRoleArn`<sup>Required</sup> <a name="IamRoleArn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.iamRoleArn"></a>

```go
func IamRoleArn() *string
```

- *Type:* *string

---

##### `IdcDisplayName`<sup>Required</sup> <a name="IdcDisplayName" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.idcDisplayName"></a>

```go
func IdcDisplayName() *string
```

- *Type:* *string

---

##### `IdcInstanceArn`<sup>Required</sup> <a name="IdcInstanceArn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.idcInstanceArn"></a>

```go
func IdcInstanceArn() *string
```

- *Type:* *string

---

##### `IdcManagedApplicationArn`<sup>Required</sup> <a name="IdcManagedApplicationArn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.idcManagedApplicationArn"></a>

```go
func IdcManagedApplicationArn() *string
```

- *Type:* *string

---

##### `IdcOnboardStatus`<sup>Required</sup> <a name="IdcOnboardStatus" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.idcOnboardStatus"></a>

```go
func IdcOnboardStatus() *string
```

- *Type:* *string

---

##### `IdentityNamespace`<sup>Required</sup> <a name="IdentityNamespace" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.identityNamespace"></a>

```go
func IdentityNamespace() *string
```

- *Type:* *string

---

##### `RedshiftIdcApplicationArn`<sup>Required</sup> <a name="RedshiftIdcApplicationArn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.redshiftIdcApplicationArn"></a>

```go
func RedshiftIdcApplicationArn() *string
```

- *Type:* *string

---

##### `RedshiftIdcApplicationName`<sup>Required</sup> <a name="RedshiftIdcApplicationName" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.redshiftIdcApplicationName"></a>

```go
func RedshiftIdcApplicationName() *string
```

- *Type:* *string

---

##### `ServiceIntegrations`<sup>Required</sup> <a name="ServiceIntegrations" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.serviceIntegrations"></a>

```go
func ServiceIntegrations() DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsList">DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsList</a>

---

##### `SsoTagKeys`<sup>Required</sup> <a name="SsoTagKeys" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.ssoTagKeys"></a>

```go
func SsoTagKeys() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.tags"></a>

```go
func Tags() DataAwsccRedshiftRedshiftIdcApplicationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsList">DataAwsccRedshiftRedshiftIdcApplicationTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplication.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct <a name="DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftredshiftidcapplication"

&dataawsccredshiftredshiftidcapplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct {

}
```


### DataAwsccRedshiftRedshiftIdcApplicationConfig <a name="DataAwsccRedshiftRedshiftIdcApplicationConfig" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftredshiftidcapplication"

&dataawsccredshiftredshiftidcapplication.DataAwsccRedshiftRedshiftIdcApplicationConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/redshift_redshift_idc_application#id DataAwsccRedshiftRedshiftIdcApplication#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrations <a name="DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrations" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftredshiftidcapplication"

&dataawsccredshiftredshiftidcapplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrations {

}
```


### DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation <a name="DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftredshiftidcapplication"

&dataawsccredshiftredshiftidcapplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation {

}
```


### DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery <a name="DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftredshiftidcapplication"

&dataawsccredshiftredshiftidcapplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery {

}
```


### DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshift <a name="DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshift" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshift"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshift.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftredshiftidcapplication"

&dataawsccredshiftredshiftidcapplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshift {

}
```


### DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect <a name="DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftredshiftidcapplication"

&dataawsccredshiftredshiftidcapplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect {

}
```


### DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants <a name="DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftredshiftidcapplication"

&dataawsccredshiftredshiftidcapplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants {

}
```


### DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess <a name="DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftredshiftidcapplication"

&dataawsccredshiftredshiftidcapplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess {

}
```


### DataAwsccRedshiftRedshiftIdcApplicationTags <a name="DataAwsccRedshiftRedshiftIdcApplicationTags" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftredshiftidcapplication"

&dataawsccredshiftredshiftidcapplication.DataAwsccRedshiftRedshiftIdcApplicationTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList <a name="DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftredshiftidcapplication"

dataawsccredshiftredshiftidcapplication.NewDataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.get"></a>

```go
func Get(index *f64) DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference <a name="DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftredshiftidcapplication"

dataawsccredshiftredshiftidcapplication.NewDataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.authorizedAudiencesList">AuthorizedAudiencesList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.trustedTokenIssuerArn">TrustedTokenIssuerArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct">DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizedAudiencesList`<sup>Required</sup> <a name="AuthorizedAudiencesList" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.authorizedAudiencesList"></a>

```go
func AuthorizedAudiencesList() *[]*string
```

- *Type:* *[]*string

---

##### `TrustedTokenIssuerArn`<sup>Required</sup> <a name="TrustedTokenIssuerArn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.trustedTokenIssuerArn"></a>

```go
func TrustedTokenIssuerArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct">DataAwsccRedshiftRedshiftIdcApplicationAuthorizedTokenIssuerListStruct</a>

---


### DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference <a name="DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftredshiftidcapplication"

dataawsccredshiftredshiftidcapplication.NewDataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.property.authorization">Authorization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery">DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.property.authorization"></a>

```go
func Authorization() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery">DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQuery</a>

---


### DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList <a name="DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftredshiftidcapplication"

dataawsccredshiftredshiftidcapplication.NewDataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.get"></a>

```go
func Get(index *f64) DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference <a name="DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftredshiftidcapplication"

dataawsccredshiftredshiftidcapplication.NewDataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.property.lakeFormationQuery">LakeFormationQuery</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference">DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation">DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LakeFormationQuery`<sup>Required</sup> <a name="LakeFormationQuery" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.property.lakeFormationQuery"></a>

```go
func LakeFormationQuery() DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference">DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationLakeFormationQueryOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation">DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormation</a>

---


### DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsList <a name="DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsList" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftredshiftidcapplication"

dataawsccredshiftredshiftidcapplication.NewDataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsList.get"></a>

```go
func Get(index *f64) DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference <a name="DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftredshiftidcapplication"

dataawsccredshiftredshiftidcapplication.NewDataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.lakeFormation">LakeFormation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList">DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.redshift">Redshift</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList">DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.s3AccessGrants">S3AccessGrants</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList">DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrations">DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LakeFormation`<sup>Required</sup> <a name="LakeFormation" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.lakeFormation"></a>

```go
func LakeFormation() DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList">DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsLakeFormationList</a>

---

##### `Redshift`<sup>Required</sup> <a name="Redshift" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.redshift"></a>

```go
func Redshift() DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList">DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList</a>

---

##### `S3AccessGrants`<sup>Required</sup> <a name="S3AccessGrants" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.s3AccessGrants"></a>

```go
func S3AccessGrants() DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList">DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrations">DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrations</a>

---


### DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference <a name="DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftredshiftidcapplication"

dataawsccredshiftredshiftidcapplication.NewDataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.property.authorization">Authorization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect">DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.property.authorization"></a>

```go
func Authorization() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect">DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnect</a>

---


### DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList <a name="DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftredshiftidcapplication"

dataawsccredshiftredshiftidcapplication.NewDataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.get"></a>

```go
func Get(index *f64) DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference <a name="DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftredshiftidcapplication"

dataawsccredshiftredshiftidcapplication.NewDataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.property.connect">Connect</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference">DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshift">DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshift</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Connect`<sup>Required</sup> <a name="Connect" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.property.connect"></a>

```go
func Connect() DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference">DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftConnectOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshiftOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshift
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshift">DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsRedshift</a>

---


### DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList <a name="DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftredshiftidcapplication"

dataawsccredshiftredshiftidcapplication.NewDataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.get"></a>

```go
func Get(index *f64) DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference <a name="DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftredshiftidcapplication"

dataawsccredshiftredshiftidcapplication.NewDataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.property.readWriteAccess">ReadWriteAccess</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference">DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants">DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadWriteAccess`<sup>Required</sup> <a name="ReadWriteAccess" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.property.readWriteAccess"></a>

```go
func ReadWriteAccess() DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference">DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants">DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrants</a>

---


### DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference <a name="DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftredshiftidcapplication"

dataawsccredshiftredshiftidcapplication.NewDataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.property.authorization">Authorization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess">DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.property.authorization"></a>

```go
func Authorization() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccessOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess">DataAwsccRedshiftRedshiftIdcApplicationServiceIntegrationsS3AccessGrantsReadWriteAccess</a>

---


### DataAwsccRedshiftRedshiftIdcApplicationTagsList <a name="DataAwsccRedshiftRedshiftIdcApplicationTagsList" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftredshiftidcapplication"

dataawsccredshiftredshiftidcapplication.NewDataAwsccRedshiftRedshiftIdcApplicationTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccRedshiftRedshiftIdcApplicationTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsList.get"></a>

```go
func Get(index *f64) DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference <a name="DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftredshiftidcapplication"

dataawsccredshiftredshiftidcapplication.NewDataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTags">DataAwsccRedshiftRedshiftIdcApplicationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccRedshiftRedshiftIdcApplicationTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftRedshiftIdcApplication.DataAwsccRedshiftRedshiftIdcApplicationTags">DataAwsccRedshiftRedshiftIdcApplicationTags</a>

---



