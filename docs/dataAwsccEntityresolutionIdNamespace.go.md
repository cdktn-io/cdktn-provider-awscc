# `dataAwsccEntityresolutionIdNamespace` Submodule <a name="`dataAwsccEntityresolutionIdNamespace` Submodule" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEntityresolutionIdNamespace <a name="DataAwsccEntityresolutionIdNamespace" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/entityresolution_id_namespace awscc_entityresolution_id_namespace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionidnamespace"

dataawsccentityresolutionidnamespace.NewDataAwsccEntityresolutionIdNamespace(scope Construct, id *string, config DataAwsccEntityresolutionIdNamespaceConfig) DataAwsccEntityresolutionIdNamespace
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceConfig">DataAwsccEntityresolutionIdNamespaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceConfig">DataAwsccEntityresolutionIdNamespaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEntityresolutionIdNamespace resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionidnamespace"

dataawsccentityresolutionidnamespace.DataAwsccEntityresolutionIdNamespace_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionidnamespace"

dataawsccentityresolutionidnamespace.DataAwsccEntityresolutionIdNamespace_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionidnamespace"

dataawsccentityresolutionidnamespace.DataAwsccEntityresolutionIdNamespace_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionidnamespace"

dataawsccentityresolutionidnamespace.DataAwsccEntityresolutionIdNamespace_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccEntityresolutionIdNamespace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccEntityresolutionIdNamespace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccEntityresolutionIdNamespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/entityresolution_id_namespace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEntityresolutionIdNamespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.idMappingWorkflowProperties">IdMappingWorkflowProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesList">DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.idNamespaceArn">IdNamespaceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.idNamespaceName">IdNamespaceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.inputSourceConfig">InputSourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigList">DataAwsccEntityresolutionIdNamespaceInputSourceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsList">DataAwsccEntityresolutionIdNamespaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `IdMappingWorkflowProperties`<sup>Required</sup> <a name="IdMappingWorkflowProperties" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.idMappingWorkflowProperties"></a>

```go
func IdMappingWorkflowProperties() DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesList">DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesList</a>

---

##### `IdNamespaceArn`<sup>Required</sup> <a name="IdNamespaceArn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.idNamespaceArn"></a>

```go
func IdNamespaceArn() *string
```

- *Type:* *string

---

##### `IdNamespaceName`<sup>Required</sup> <a name="IdNamespaceName" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.idNamespaceName"></a>

```go
func IdNamespaceName() *string
```

- *Type:* *string

---

##### `InputSourceConfig`<sup>Required</sup> <a name="InputSourceConfig" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.inputSourceConfig"></a>

```go
func InputSourceConfig() DataAwsccEntityresolutionIdNamespaceInputSourceConfigList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigList">DataAwsccEntityresolutionIdNamespaceInputSourceConfigList</a>

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.tags"></a>

```go
func Tags() DataAwsccEntityresolutionIdNamespaceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsList">DataAwsccEntityresolutionIdNamespaceTagsList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespace.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEntityresolutionIdNamespaceConfig <a name="DataAwsccEntityresolutionIdNamespaceConfig" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionidnamespace"

&dataawsccentityresolutionidnamespace.DataAwsccEntityresolutionIdNamespaceConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/entityresolution_id_namespace#id DataAwsccEntityresolutionIdNamespace#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowProperties <a name="DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowProperties" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionidnamespace"

&dataawsccentityresolutionidnamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowProperties {

}
```


### DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties <a name="DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionidnamespace"

&dataawsccentityresolutionidnamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties {

}
```


### DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties <a name="DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionidnamespace"

&dataawsccentityresolutionidnamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties {

}
```


### DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules <a name="DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionidnamespace"

&dataawsccentityresolutionidnamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules {

}
```


### DataAwsccEntityresolutionIdNamespaceInputSourceConfig <a name="DataAwsccEntityresolutionIdNamespaceInputSourceConfig" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionidnamespace"

&dataawsccentityresolutionidnamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfig {

}
```


### DataAwsccEntityresolutionIdNamespaceTags <a name="DataAwsccEntityresolutionIdNamespaceTags" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionidnamespace"

&dataawsccentityresolutionidnamespace.DataAwsccEntityresolutionIdNamespaceTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesList <a name="DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesList" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionidnamespace"

dataawsccentityresolutionidnamespace.NewDataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.get"></a>

```go
func Get(index *f64) DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference <a name="DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionidnamespace"

dataawsccentityresolutionidnamespace.NewDataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.property.idMappingType">IdMappingType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.property.providerProperties">ProviderProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference">DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.property.ruleBasedProperties">RuleBasedProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference">DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowProperties">DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdMappingType`<sup>Required</sup> <a name="IdMappingType" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.property.idMappingType"></a>

```go
func IdMappingType() *string
```

- *Type:* *string

---

##### `ProviderProperties`<sup>Required</sup> <a name="ProviderProperties" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.property.providerProperties"></a>

```go
func ProviderProperties() DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference">DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference</a>

---

##### `RuleBasedProperties`<sup>Required</sup> <a name="RuleBasedProperties" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.property.ruleBasedProperties"></a>

```go
func RuleBasedProperties() DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference">DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowProperties">DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowProperties</a>

---


### DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference <a name="DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionidnamespace"

dataawsccentityresolutionidnamespace.NewDataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.property.providerConfiguration">ProviderConfiguration</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.property.providerServiceArn">ProviderServiceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties">DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ProviderConfiguration`<sup>Required</sup> <a name="ProviderConfiguration" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.property.providerConfiguration"></a>

```go
func ProviderConfiguration() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `ProviderServiceArn`<sup>Required</sup> <a name="ProviderServiceArn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.property.providerServiceArn"></a>

```go
func ProviderServiceArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties">DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesProviderProperties</a>

---


### DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference <a name="DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionidnamespace"

dataawsccentityresolutionidnamespace.NewDataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.attributeMatchingModel">AttributeMatchingModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.recordMatchingModels">RecordMatchingModels</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.ruleDefinitionTypes">RuleDefinitionTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.rules">Rules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList">DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties">DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttributeMatchingModel`<sup>Required</sup> <a name="AttributeMatchingModel" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.attributeMatchingModel"></a>

```go
func AttributeMatchingModel() *string
```

- *Type:* *string

---

##### `RecordMatchingModels`<sup>Required</sup> <a name="RecordMatchingModels" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.recordMatchingModels"></a>

```go
func RecordMatchingModels() *[]*string
```

- *Type:* *[]*string

---

##### `RuleDefinitionTypes`<sup>Required</sup> <a name="RuleDefinitionTypes" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.ruleDefinitionTypes"></a>

```go
func RuleDefinitionTypes() *[]*string
```

- *Type:* *[]*string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.rules"></a>

```go
func Rules() DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList">DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties">DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedProperties</a>

---


### DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList <a name="DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionidnamespace"

dataawsccentityresolutionidnamespace.NewDataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.get"></a>

```go
func Get(index *f64) DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference <a name="DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionidnamespace"

dataawsccentityresolutionidnamespace.NewDataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.property.matchingKeys">MatchingKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.property.ruleName">RuleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules">DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchingKeys`<sup>Required</sup> <a name="MatchingKeys" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.property.matchingKeys"></a>

```go
func MatchingKeys() *[]*string
```

- *Type:* *[]*string

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.property.ruleName"></a>

```go
func RuleName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules">DataAwsccEntityresolutionIdNamespaceIdMappingWorkflowPropertiesRuleBasedPropertiesRules</a>

---


### DataAwsccEntityresolutionIdNamespaceInputSourceConfigList <a name="DataAwsccEntityresolutionIdNamespaceInputSourceConfigList" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionidnamespace"

dataawsccentityresolutionidnamespace.NewDataAwsccEntityresolutionIdNamespaceInputSourceConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEntityresolutionIdNamespaceInputSourceConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigList.get"></a>

```go
func Get(index *f64) DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference <a name="DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionidnamespace"

dataawsccentityresolutionidnamespace.NewDataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.property.inputSourceArn">InputSourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfig">DataAwsccEntityresolutionIdNamespaceInputSourceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InputSourceArn`<sup>Required</sup> <a name="InputSourceArn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.property.inputSourceArn"></a>

```go
func InputSourceArn() *string
```

- *Type:* *string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEntityresolutionIdNamespaceInputSourceConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceInputSourceConfig">DataAwsccEntityresolutionIdNamespaceInputSourceConfig</a>

---


### DataAwsccEntityresolutionIdNamespaceTagsList <a name="DataAwsccEntityresolutionIdNamespaceTagsList" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionidnamespace"

dataawsccentityresolutionidnamespace.NewDataAwsccEntityresolutionIdNamespaceTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEntityresolutionIdNamespaceTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsList.get"></a>

```go
func Get(index *f64) DataAwsccEntityresolutionIdNamespaceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEntityresolutionIdNamespaceTagsOutputReference <a name="DataAwsccEntityresolutionIdNamespaceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccentityresolutionidnamespace"

dataawsccentityresolutionidnamespace.NewDataAwsccEntityresolutionIdNamespaceTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEntityresolutionIdNamespaceTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTags">DataAwsccEntityresolutionIdNamespaceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEntityresolutionIdNamespaceTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdNamespace.DataAwsccEntityresolutionIdNamespaceTags">DataAwsccEntityresolutionIdNamespaceTags</a>

---



