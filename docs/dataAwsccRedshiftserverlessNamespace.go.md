# `dataAwsccRedshiftserverlessNamespace` Submodule <a name="`dataAwsccRedshiftserverlessNamespace` Submodule" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRedshiftserverlessNamespace <a name="DataAwsccRedshiftserverlessNamespace" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/redshiftserverless_namespace awscc_redshiftserverless_namespace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftserverlessnamespace"

dataawsccredshiftserverlessnamespace.NewDataAwsccRedshiftserverlessNamespace(scope Construct, id *string, config DataAwsccRedshiftserverlessNamespaceConfig) DataAwsccRedshiftserverlessNamespace
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceConfig">DataAwsccRedshiftserverlessNamespaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceConfig">DataAwsccRedshiftserverlessNamespaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccRedshiftserverlessNamespace resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftserverlessnamespace"

dataawsccredshiftserverlessnamespace.DataAwsccRedshiftserverlessNamespace_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftserverlessnamespace"

dataawsccredshiftserverlessnamespace.DataAwsccRedshiftserverlessNamespace_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftserverlessnamespace"

dataawsccredshiftserverlessnamespace.DataAwsccRedshiftserverlessNamespace_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftserverlessnamespace"

dataawsccredshiftserverlessnamespace.DataAwsccRedshiftserverlessNamespace_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccRedshiftserverlessNamespace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccRedshiftserverlessNamespace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccRedshiftserverlessNamespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/redshiftserverless_namespace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRedshiftserverlessNamespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.property.adminPasswordSecretKmsKeyId">AdminPasswordSecretKmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.property.adminUsername">AdminUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.property.adminUserPassword">AdminUserPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.property.dbName">DbName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.property.defaultIamRoleArn">DefaultIamRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.property.finalSnapshotName">FinalSnapshotName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.property.finalSnapshotRetentionPeriod">FinalSnapshotRetentionPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.property.iamRoles">IamRoles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.property.logExports">LogExports</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.property.manageAdminPassword">ManageAdminPassword</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.property.namespace">Namespace</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference">DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.property.namespaceName">NamespaceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.property.namespaceResourcePolicy">NamespaceResourcePolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.property.redshiftIdcApplicationArn">RedshiftIdcApplicationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.property.snapshotCopyConfigurations">SnapshotCopyConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsList">DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsList">DataAwsccRedshiftserverlessNamespaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AdminPasswordSecretKmsKeyId`<sup>Required</sup> <a name="AdminPasswordSecretKmsKeyId" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.property.adminPasswordSecretKmsKeyId"></a>

```go
func AdminPasswordSecretKmsKeyId() *string
```

- *Type:* *string

---

##### `AdminUsername`<sup>Required</sup> <a name="AdminUsername" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.property.adminUsername"></a>

```go
func AdminUsername() *string
```

- *Type:* *string

---

##### `AdminUserPassword`<sup>Required</sup> <a name="AdminUserPassword" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.property.adminUserPassword"></a>

```go
func AdminUserPassword() *string
```

- *Type:* *string

---

##### `DbName`<sup>Required</sup> <a name="DbName" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.property.dbName"></a>

```go
func DbName() *string
```

- *Type:* *string

---

##### `DefaultIamRoleArn`<sup>Required</sup> <a name="DefaultIamRoleArn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.property.defaultIamRoleArn"></a>

```go
func DefaultIamRoleArn() *string
```

- *Type:* *string

---

##### `FinalSnapshotName`<sup>Required</sup> <a name="FinalSnapshotName" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.property.finalSnapshotName"></a>

```go
func FinalSnapshotName() *string
```

- *Type:* *string

---

##### `FinalSnapshotRetentionPeriod`<sup>Required</sup> <a name="FinalSnapshotRetentionPeriod" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.property.finalSnapshotRetentionPeriod"></a>

```go
func FinalSnapshotRetentionPeriod() *f64
```

- *Type:* *f64

---

##### `IamRoles`<sup>Required</sup> <a name="IamRoles" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.property.iamRoles"></a>

```go
func IamRoles() *[]*string
```

- *Type:* *[]*string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `LogExports`<sup>Required</sup> <a name="LogExports" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.property.logExports"></a>

```go
func LogExports() *[]*string
```

- *Type:* *[]*string

---

##### `ManageAdminPassword`<sup>Required</sup> <a name="ManageAdminPassword" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.property.manageAdminPassword"></a>

```go
func ManageAdminPassword() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.property.namespace"></a>

```go
func Namespace() DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference">DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference</a>

---

##### `NamespaceName`<sup>Required</sup> <a name="NamespaceName" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.property.namespaceName"></a>

```go
func NamespaceName() *string
```

- *Type:* *string

---

##### `NamespaceResourcePolicy`<sup>Required</sup> <a name="NamespaceResourcePolicy" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.property.namespaceResourcePolicy"></a>

```go
func NamespaceResourcePolicy() *string
```

- *Type:* *string

---

##### `RedshiftIdcApplicationArn`<sup>Required</sup> <a name="RedshiftIdcApplicationArn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.property.redshiftIdcApplicationArn"></a>

```go
func RedshiftIdcApplicationArn() *string
```

- *Type:* *string

---

##### `SnapshotCopyConfigurations`<sup>Required</sup> <a name="SnapshotCopyConfigurations" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.property.snapshotCopyConfigurations"></a>

```go
func SnapshotCopyConfigurations() DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsList">DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.property.tags"></a>

```go
func Tags() DataAwsccRedshiftserverlessNamespaceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsList">DataAwsccRedshiftserverlessNamespaceTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespace.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRedshiftserverlessNamespaceConfig <a name="DataAwsccRedshiftserverlessNamespaceConfig" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftserverlessnamespace"

&dataawsccredshiftserverlessnamespace.DataAwsccRedshiftserverlessNamespaceConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/redshiftserverless_namespace#id DataAwsccRedshiftserverlessNamespace#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccRedshiftserverlessNamespaceNamespace <a name="DataAwsccRedshiftserverlessNamespaceNamespace" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespace.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftserverlessnamespace"

&dataawsccredshiftserverlessnamespace.DataAwsccRedshiftserverlessNamespaceNamespace {

}
```


### DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurations <a name="DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurations" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftserverlessnamespace"

&dataawsccredshiftserverlessnamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurations {

}
```


### DataAwsccRedshiftserverlessNamespaceTags <a name="DataAwsccRedshiftserverlessNamespaceTags" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftserverlessnamespace"

&dataawsccredshiftserverlessnamespace.DataAwsccRedshiftserverlessNamespaceTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference <a name="DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftserverlessnamespace"

dataawsccredshiftserverlessnamespace.NewDataAwsccRedshiftserverlessNamespaceNamespaceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.property.adminPasswordSecretArn">AdminPasswordSecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.property.adminPasswordSecretKmsKeyId">AdminPasswordSecretKmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.property.adminUsername">AdminUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.property.creationDate">CreationDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.property.dbName">DbName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.property.defaultIamRoleArn">DefaultIamRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.property.iamRoles">IamRoles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.property.logExports">LogExports</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.property.namespaceArn">NamespaceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.property.namespaceId">NamespaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.property.namespaceName">NamespaceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespace">DataAwsccRedshiftserverlessNamespaceNamespace</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdminPasswordSecretArn`<sup>Required</sup> <a name="AdminPasswordSecretArn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.property.adminPasswordSecretArn"></a>

```go
func AdminPasswordSecretArn() *string
```

- *Type:* *string

---

##### `AdminPasswordSecretKmsKeyId`<sup>Required</sup> <a name="AdminPasswordSecretKmsKeyId" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.property.adminPasswordSecretKmsKeyId"></a>

```go
func AdminPasswordSecretKmsKeyId() *string
```

- *Type:* *string

---

##### `AdminUsername`<sup>Required</sup> <a name="AdminUsername" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.property.adminUsername"></a>

```go
func AdminUsername() *string
```

- *Type:* *string

---

##### `CreationDate`<sup>Required</sup> <a name="CreationDate" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.property.creationDate"></a>

```go
func CreationDate() *string
```

- *Type:* *string

---

##### `DbName`<sup>Required</sup> <a name="DbName" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.property.dbName"></a>

```go
func DbName() *string
```

- *Type:* *string

---

##### `DefaultIamRoleArn`<sup>Required</sup> <a name="DefaultIamRoleArn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.property.defaultIamRoleArn"></a>

```go
func DefaultIamRoleArn() *string
```

- *Type:* *string

---

##### `IamRoles`<sup>Required</sup> <a name="IamRoles" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.property.iamRoles"></a>

```go
func IamRoles() *[]*string
```

- *Type:* *[]*string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `LogExports`<sup>Required</sup> <a name="LogExports" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.property.logExports"></a>

```go
func LogExports() *[]*string
```

- *Type:* *[]*string

---

##### `NamespaceArn`<sup>Required</sup> <a name="NamespaceArn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.property.namespaceArn"></a>

```go
func NamespaceArn() *string
```

- *Type:* *string

---

##### `NamespaceId`<sup>Required</sup> <a name="NamespaceId" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.property.namespaceId"></a>

```go
func NamespaceId() *string
```

- *Type:* *string

---

##### `NamespaceName`<sup>Required</sup> <a name="NamespaceName" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.property.namespaceName"></a>

```go
func NamespaceName() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespaceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccRedshiftserverlessNamespaceNamespace
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceNamespace">DataAwsccRedshiftserverlessNamespaceNamespace</a>

---


### DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsList <a name="DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsList" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftserverlessnamespace"

dataawsccredshiftserverlessnamespace.NewDataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsList.get"></a>

```go
func Get(index *f64) DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference <a name="DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftserverlessnamespace"

dataawsccredshiftserverlessnamespace.NewDataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.destinationKmsKeyId">DestinationKmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.destinationRegion">DestinationRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.snapshotRetentionPeriod">SnapshotRetentionPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurations">DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationKmsKeyId`<sup>Required</sup> <a name="DestinationKmsKeyId" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.destinationKmsKeyId"></a>

```go
func DestinationKmsKeyId() *string
```

- *Type:* *string

---

##### `DestinationRegion`<sup>Required</sup> <a name="DestinationRegion" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.destinationRegion"></a>

```go
func DestinationRegion() *string
```

- *Type:* *string

---

##### `SnapshotRetentionPeriod`<sup>Required</sup> <a name="SnapshotRetentionPeriod" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.snapshotRetentionPeriod"></a>

```go
func SnapshotRetentionPeriod() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurations">DataAwsccRedshiftserverlessNamespaceSnapshotCopyConfigurations</a>

---


### DataAwsccRedshiftserverlessNamespaceTagsList <a name="DataAwsccRedshiftserverlessNamespaceTagsList" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftserverlessnamespace"

dataawsccredshiftserverlessnamespace.NewDataAwsccRedshiftserverlessNamespaceTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccRedshiftserverlessNamespaceTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsList.get"></a>

```go
func Get(index *f64) DataAwsccRedshiftserverlessNamespaceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccRedshiftserverlessNamespaceTagsOutputReference <a name="DataAwsccRedshiftserverlessNamespaceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccredshiftserverlessnamespace"

dataawsccredshiftserverlessnamespace.NewDataAwsccRedshiftserverlessNamespaceTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccRedshiftserverlessNamespaceTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTags">DataAwsccRedshiftserverlessNamespaceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccRedshiftserverlessNamespaceTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessNamespace.DataAwsccRedshiftserverlessNamespaceTags">DataAwsccRedshiftserverlessNamespaceTags</a>

---



