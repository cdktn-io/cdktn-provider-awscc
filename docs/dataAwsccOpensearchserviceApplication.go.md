# `dataAwsccOpensearchserviceApplication` Submodule <a name="`dataAwsccOpensearchserviceApplication` Submodule" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccOpensearchserviceApplication <a name="DataAwsccOpensearchserviceApplication" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/opensearchservice_application awscc_opensearchservice_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccopensearchserviceapplication"

dataawsccopensearchserviceapplication.NewDataAwsccOpensearchserviceApplication(scope Construct, id *string, config DataAwsccOpensearchserviceApplicationConfig) DataAwsccOpensearchserviceApplication
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationConfig">DataAwsccOpensearchserviceApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationConfig">DataAwsccOpensearchserviceApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccOpensearchserviceApplication resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccopensearchserviceapplication"

dataawsccopensearchserviceapplication.DataAwsccOpensearchserviceApplication_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccopensearchserviceapplication"

dataawsccopensearchserviceapplication.DataAwsccOpensearchserviceApplication_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccopensearchserviceapplication"

dataawsccopensearchserviceapplication.DataAwsccOpensearchserviceApplication_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccopensearchserviceapplication"

dataawsccopensearchserviceapplication.DataAwsccOpensearchserviceApplication_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccOpensearchserviceApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccOpensearchserviceApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccOpensearchserviceApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/opensearchservice_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccOpensearchserviceApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.property.appConfigs">AppConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsList">DataAwsccOpensearchserviceApplicationAppConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.property.applicationId">ApplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.property.dataSources">DataSources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesList">DataAwsccOpensearchserviceApplicationDataSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.property.iamIdentityCenterOptions">IamIdentityCenterOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationIamIdentityCenterOptionsOutputReference">DataAwsccOpensearchserviceApplicationIamIdentityCenterOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsList">DataAwsccOpensearchserviceApplicationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AppConfigs`<sup>Required</sup> <a name="AppConfigs" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.property.appConfigs"></a>

```go
func AppConfigs() DataAwsccOpensearchserviceApplicationAppConfigsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsList">DataAwsccOpensearchserviceApplicationAppConfigsList</a>

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.property.applicationId"></a>

```go
func ApplicationId() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `DataSources`<sup>Required</sup> <a name="DataSources" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.property.dataSources"></a>

```go
func DataSources() DataAwsccOpensearchserviceApplicationDataSourcesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesList">DataAwsccOpensearchserviceApplicationDataSourcesList</a>

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `IamIdentityCenterOptions`<sup>Required</sup> <a name="IamIdentityCenterOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.property.iamIdentityCenterOptions"></a>

```go
func IamIdentityCenterOptions() DataAwsccOpensearchserviceApplicationIamIdentityCenterOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationIamIdentityCenterOptionsOutputReference">DataAwsccOpensearchserviceApplicationIamIdentityCenterOptionsOutputReference</a>

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.property.tags"></a>

```go
func Tags() DataAwsccOpensearchserviceApplicationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsList">DataAwsccOpensearchserviceApplicationTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplication.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccOpensearchserviceApplicationAppConfigs <a name="DataAwsccOpensearchserviceApplicationAppConfigs" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccopensearchserviceapplication"

&dataawsccopensearchserviceapplication.DataAwsccOpensearchserviceApplicationAppConfigs {

}
```


### DataAwsccOpensearchserviceApplicationConfig <a name="DataAwsccOpensearchserviceApplicationConfig" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccopensearchserviceapplication"

&dataawsccopensearchserviceapplication.DataAwsccOpensearchserviceApplicationConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/opensearchservice_application#id DataAwsccOpensearchserviceApplication#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccOpensearchserviceApplicationDataSources <a name="DataAwsccOpensearchserviceApplicationDataSources" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSources.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccopensearchserviceapplication"

&dataawsccopensearchserviceapplication.DataAwsccOpensearchserviceApplicationDataSources {

}
```


### DataAwsccOpensearchserviceApplicationIamIdentityCenterOptions <a name="DataAwsccOpensearchserviceApplicationIamIdentityCenterOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationIamIdentityCenterOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationIamIdentityCenterOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccopensearchserviceapplication"

&dataawsccopensearchserviceapplication.DataAwsccOpensearchserviceApplicationIamIdentityCenterOptions {

}
```


### DataAwsccOpensearchserviceApplicationTags <a name="DataAwsccOpensearchserviceApplicationTags" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccopensearchserviceapplication"

&dataawsccopensearchserviceapplication.DataAwsccOpensearchserviceApplicationTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccOpensearchserviceApplicationAppConfigsList <a name="DataAwsccOpensearchserviceApplicationAppConfigsList" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccopensearchserviceapplication"

dataawsccopensearchserviceapplication.NewDataAwsccOpensearchserviceApplicationAppConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccOpensearchserviceApplicationAppConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsList.get"></a>

```go
func Get(index *f64) DataAwsccOpensearchserviceApplicationAppConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccOpensearchserviceApplicationAppConfigsOutputReference <a name="DataAwsccOpensearchserviceApplicationAppConfigsOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccopensearchserviceapplication"

dataawsccopensearchserviceapplication.NewDataAwsccOpensearchserviceApplicationAppConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccOpensearchserviceApplicationAppConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigs">DataAwsccOpensearchserviceApplicationAppConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccOpensearchserviceApplicationAppConfigs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationAppConfigs">DataAwsccOpensearchserviceApplicationAppConfigs</a>

---


### DataAwsccOpensearchserviceApplicationDataSourcesList <a name="DataAwsccOpensearchserviceApplicationDataSourcesList" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccopensearchserviceapplication"

dataawsccopensearchserviceapplication.NewDataAwsccOpensearchserviceApplicationDataSourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccOpensearchserviceApplicationDataSourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesList.get"></a>

```go
func Get(index *f64) DataAwsccOpensearchserviceApplicationDataSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccOpensearchserviceApplicationDataSourcesOutputReference <a name="DataAwsccOpensearchserviceApplicationDataSourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccopensearchserviceapplication"

dataawsccopensearchserviceapplication.NewDataAwsccOpensearchserviceApplicationDataSourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccOpensearchserviceApplicationDataSourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesOutputReference.property.dataSourceArn">DataSourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesOutputReference.property.dataSourceDescription">DataSourceDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSources">DataAwsccOpensearchserviceApplicationDataSources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataSourceArn`<sup>Required</sup> <a name="DataSourceArn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesOutputReference.property.dataSourceArn"></a>

```go
func DataSourceArn() *string
```

- *Type:* *string

---

##### `DataSourceDescription`<sup>Required</sup> <a name="DataSourceDescription" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesOutputReference.property.dataSourceDescription"></a>

```go
func DataSourceDescription() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccOpensearchserviceApplicationDataSources
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationDataSources">DataAwsccOpensearchserviceApplicationDataSources</a>

---


### DataAwsccOpensearchserviceApplicationIamIdentityCenterOptionsOutputReference <a name="DataAwsccOpensearchserviceApplicationIamIdentityCenterOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationIamIdentityCenterOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccopensearchserviceapplication"

dataawsccopensearchserviceapplication.NewDataAwsccOpensearchserviceApplicationIamIdentityCenterOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccOpensearchserviceApplicationIamIdentityCenterOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.property.iamIdentityCenterInstanceArn">IamIdentityCenterInstanceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.property.iamRoleForIdentityCenterApplicationArn">IamRoleForIdentityCenterApplicationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationIamIdentityCenterOptions">DataAwsccOpensearchserviceApplicationIamIdentityCenterOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `IamIdentityCenterInstanceArn`<sup>Required</sup> <a name="IamIdentityCenterInstanceArn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.property.iamIdentityCenterInstanceArn"></a>

```go
func IamIdentityCenterInstanceArn() *string
```

- *Type:* *string

---

##### `IamRoleForIdentityCenterApplicationArn`<sup>Required</sup> <a name="IamRoleForIdentityCenterApplicationArn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.property.iamRoleForIdentityCenterApplicationArn"></a>

```go
func IamRoleForIdentityCenterApplicationArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccOpensearchserviceApplicationIamIdentityCenterOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationIamIdentityCenterOptions">DataAwsccOpensearchserviceApplicationIamIdentityCenterOptions</a>

---


### DataAwsccOpensearchserviceApplicationTagsList <a name="DataAwsccOpensearchserviceApplicationTagsList" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccopensearchserviceapplication"

dataawsccopensearchserviceapplication.NewDataAwsccOpensearchserviceApplicationTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccOpensearchserviceApplicationTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsList.get"></a>

```go
func Get(index *f64) DataAwsccOpensearchserviceApplicationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccOpensearchserviceApplicationTagsOutputReference <a name="DataAwsccOpensearchserviceApplicationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccopensearchserviceapplication"

dataawsccopensearchserviceapplication.NewDataAwsccOpensearchserviceApplicationTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccOpensearchserviceApplicationTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTags">DataAwsccOpensearchserviceApplicationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccOpensearchserviceApplicationTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserviceApplication.DataAwsccOpensearchserviceApplicationTags">DataAwsccOpensearchserviceApplicationTags</a>

---



