# `dataAwsccLambdaRuntimeVersion` Submodule <a name="`dataAwsccLambdaRuntimeVersion` Submodule" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccLambdaRuntimeVersion <a name="DataAwsccLambdaRuntimeVersion" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/lambda_runtime_version awscc_lambda_runtime_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscclambdaruntimeversion"

dataawscclambdaruntimeversion.NewDataAwsccLambdaRuntimeVersion(scope Construct, id *string, config DataAwsccLambdaRuntimeVersionConfig) DataAwsccLambdaRuntimeVersion
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionConfig">DataAwsccLambdaRuntimeVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionConfig">DataAwsccLambdaRuntimeVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccLambdaRuntimeVersion resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscclambdaruntimeversion"

dataawscclambdaruntimeversion.DataAwsccLambdaRuntimeVersion_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscclambdaruntimeversion"

dataawscclambdaruntimeversion.DataAwsccLambdaRuntimeVersion_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscclambdaruntimeversion"

dataawscclambdaruntimeversion.DataAwsccLambdaRuntimeVersion_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscclambdaruntimeversion"

dataawscclambdaruntimeversion.DataAwsccLambdaRuntimeVersion_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccLambdaRuntimeVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccLambdaRuntimeVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccLambdaRuntimeVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/lambda_runtime_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccLambdaRuntimeVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.compatibility">Compatibility</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference">DataAwsccLambdaRuntimeVersionCompatibilityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.created">Created</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.imageUri">ImageUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.lastModified">LastModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.platforms">Platforms</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList">DataAwsccLambdaRuntimeVersionPlatformsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.releaseNotes">ReleaseNotes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.resolvedUri">ResolvedUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.runtimeName">RuntimeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Compatibility`<sup>Required</sup> <a name="Compatibility" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.compatibility"></a>

```go
func Compatibility() DataAwsccLambdaRuntimeVersionCompatibilityOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference">DataAwsccLambdaRuntimeVersionCompatibilityOutputReference</a>

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.created"></a>

```go
func Created() *string
```

- *Type:* *string

---

##### `ImageUri`<sup>Required</sup> <a name="ImageUri" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.imageUri"></a>

```go
func ImageUri() *string
```

- *Type:* *string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.lastModified"></a>

```go
func LastModified() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Platforms`<sup>Required</sup> <a name="Platforms" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.platforms"></a>

```go
func Platforms() DataAwsccLambdaRuntimeVersionPlatformsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList">DataAwsccLambdaRuntimeVersionPlatformsList</a>

---

##### `ReleaseNotes`<sup>Required</sup> <a name="ReleaseNotes" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.releaseNotes"></a>

```go
func ReleaseNotes() *string
```

- *Type:* *string

---

##### `ResolvedUri`<sup>Required</sup> <a name="ResolvedUri" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.resolvedUri"></a>

```go
func ResolvedUri() *string
```

- *Type:* *string

---

##### `RuntimeName`<sup>Required</sup> <a name="RuntimeName" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.runtimeName"></a>

```go
func RuntimeName() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersion.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccLambdaRuntimeVersionCompatibility <a name="DataAwsccLambdaRuntimeVersionCompatibility" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibility"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibility.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscclambdaruntimeversion"

&dataawscclambdaruntimeversion.DataAwsccLambdaRuntimeVersionCompatibility {

}
```


### DataAwsccLambdaRuntimeVersionConfig <a name="DataAwsccLambdaRuntimeVersionConfig" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscclambdaruntimeversion"

&dataawscclambdaruntimeversion.DataAwsccLambdaRuntimeVersionConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/lambda_runtime_version#id DataAwsccLambdaRuntimeVersion#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccLambdaRuntimeVersionPlatforms <a name="DataAwsccLambdaRuntimeVersionPlatforms" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatforms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatforms.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscclambdaruntimeversion"

&dataawscclambdaruntimeversion.DataAwsccLambdaRuntimeVersionPlatforms {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccLambdaRuntimeVersionCompatibilityOutputReference <a name="DataAwsccLambdaRuntimeVersionCompatibilityOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscclambdaruntimeversion"

dataawscclambdaruntimeversion.NewDataAwsccLambdaRuntimeVersionCompatibilityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccLambdaRuntimeVersionCompatibilityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.property.architectures">Architectures</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.property.integrationModels">IntegrationModels</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.property.managedInstances">ManagedInstances</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibility">DataAwsccLambdaRuntimeVersionCompatibility</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Architectures`<sup>Required</sup> <a name="Architectures" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.property.architectures"></a>

```go
func Architectures() *[]*string
```

- *Type:* *[]*string

---

##### `IntegrationModels`<sup>Required</sup> <a name="IntegrationModels" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.property.integrationModels"></a>

```go
func IntegrationModels() *[]*string
```

- *Type:* *[]*string

---

##### `ManagedInstances`<sup>Required</sup> <a name="ManagedInstances" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.property.managedInstances"></a>

```go
func ManagedInstances() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibilityOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLambdaRuntimeVersionCompatibility
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionCompatibility">DataAwsccLambdaRuntimeVersionCompatibility</a>

---


### DataAwsccLambdaRuntimeVersionPlatformsList <a name="DataAwsccLambdaRuntimeVersionPlatformsList" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscclambdaruntimeversion"

dataawscclambdaruntimeversion.NewDataAwsccLambdaRuntimeVersionPlatformsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccLambdaRuntimeVersionPlatformsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.get"></a>

```go
func Get(index *f64) DataAwsccLambdaRuntimeVersionPlatformsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccLambdaRuntimeVersionPlatformsOutputReference <a name="DataAwsccLambdaRuntimeVersionPlatformsOutputReference" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/dataawscclambdaruntimeversion"

dataawscclambdaruntimeversion.NewDataAwsccLambdaRuntimeVersionPlatformsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccLambdaRuntimeVersionPlatformsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.property.architecture">Architecture</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.property.digest">Digest</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.property.os">Os</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatforms">DataAwsccLambdaRuntimeVersionPlatforms</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Architecture`<sup>Required</sup> <a name="Architecture" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.property.architecture"></a>

```go
func Architecture() *string
```

- *Type:* *string

---

##### `Digest`<sup>Required</sup> <a name="Digest" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.property.digest"></a>

```go
func Digest() *string
```

- *Type:* *string

---

##### `Os`<sup>Required</sup> <a name="Os" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.property.os"></a>

```go
func Os() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatformsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccLambdaRuntimeVersionPlatforms
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLambdaRuntimeVersion.DataAwsccLambdaRuntimeVersionPlatforms">DataAwsccLambdaRuntimeVersionPlatforms</a>

---



