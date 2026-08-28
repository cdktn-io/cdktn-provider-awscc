# `dataAwsccSecurityhubSecurityControl` Submodule <a name="`dataAwsccSecurityhubSecurityControl` Submodule" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSecurityhubSecurityControl <a name="DataAwsccSecurityhubSecurityControl" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/securityhub_security_control awscc_securityhub_security_control}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityhubsecuritycontrol"

dataawsccsecurityhubsecuritycontrol.NewDataAwsccSecurityhubSecurityControl(scope Construct, id *string, config DataAwsccSecurityhubSecurityControlConfig) DataAwsccSecurityhubSecurityControl
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlConfig">DataAwsccSecurityhubSecurityControlConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlConfig">DataAwsccSecurityhubSecurityControlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSecurityhubSecurityControl resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityhubsecuritycontrol"

dataawsccsecurityhubsecuritycontrol.DataAwsccSecurityhubSecurityControl_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityhubsecuritycontrol"

dataawsccsecurityhubsecuritycontrol.DataAwsccSecurityhubSecurityControl_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityhubsecuritycontrol"

dataawsccsecurityhubsecuritycontrol.DataAwsccSecurityhubSecurityControl_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityhubsecuritycontrol"

dataawsccsecurityhubsecuritycontrol.DataAwsccSecurityhubSecurityControl_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccSecurityhubSecurityControl resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccSecurityhubSecurityControl to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccSecurityhubSecurityControl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/securityhub_security_control#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSecurityhubSecurityControl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.lastUpdateReason">LastUpdateReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersMap">DataAwsccSecurityhubSecurityControlParametersMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.securityControlArn">SecurityControlArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.securityControlId">SecurityControlId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `LastUpdateReason`<sup>Required</sup> <a name="LastUpdateReason" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.lastUpdateReason"></a>

```go
func LastUpdateReason() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.parameters"></a>

```go
func Parameters() DataAwsccSecurityhubSecurityControlParametersMap
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersMap">DataAwsccSecurityhubSecurityControlParametersMap</a>

---

##### `SecurityControlArn`<sup>Required</sup> <a name="SecurityControlArn" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.securityControlArn"></a>

```go
func SecurityControlArn() *string
```

- *Type:* *string

---

##### `SecurityControlId`<sup>Required</sup> <a name="SecurityControlId" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.securityControlId"></a>

```go
func SecurityControlId() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControl.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSecurityhubSecurityControlConfig <a name="DataAwsccSecurityhubSecurityControlConfig" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityhubsecuritycontrol"

&dataawsccsecurityhubsecuritycontrol.DataAwsccSecurityhubSecurityControlConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/securityhub_security_control#id DataAwsccSecurityhubSecurityControl#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSecurityhubSecurityControlParameters <a name="DataAwsccSecurityhubSecurityControlParameters" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityhubsecuritycontrol"

&dataawsccsecurityhubsecuritycontrol.DataAwsccSecurityhubSecurityControlParameters {

}
```


### DataAwsccSecurityhubSecurityControlParametersValue <a name="DataAwsccSecurityhubSecurityControlParametersValue" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityhubsecuritycontrol"

&dataawsccsecurityhubsecuritycontrol.DataAwsccSecurityhubSecurityControlParametersValue {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSecurityhubSecurityControlParametersMap <a name="DataAwsccSecurityhubSecurityControlParametersMap" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersMap.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityhubsecuritycontrol"

dataawsccsecurityhubsecuritycontrol.NewDataAwsccSecurityhubSecurityControlParametersMap(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSecurityhubSecurityControlParametersMap
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersMap.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersMap.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersMap.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersMap.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersMap.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersMap.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersMap.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersMap.get"></a>

```go
func Get(key *string) DataAwsccSecurityhubSecurityControlParametersOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersMap.get.parameter.key"></a>

- *Type:* *string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersMap.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersMap.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersMap.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersMap.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccSecurityhubSecurityControlParametersOutputReference <a name="DataAwsccSecurityhubSecurityControlParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityhubsecuritycontrol"

dataawsccsecurityhubsecuritycontrol.NewDataAwsccSecurityhubSecurityControlParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectKey *string) DataAwsccSecurityhubSecurityControlParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>*string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* *string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.property.value">Value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference">DataAwsccSecurityhubSecurityControlParametersValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.property.valueType">ValueType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParameters">DataAwsccSecurityhubSecurityControlParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.property.value"></a>

```go
func Value() DataAwsccSecurityhubSecurityControlParametersValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference">DataAwsccSecurityhubSecurityControlParametersValueOutputReference</a>

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.property.valueType"></a>

```go
func ValueType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSecurityhubSecurityControlParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParameters">DataAwsccSecurityhubSecurityControlParameters</a>

---


### DataAwsccSecurityhubSecurityControlParametersValueOutputReference <a name="DataAwsccSecurityhubSecurityControlParametersValueOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityhubsecuritycontrol"

dataawsccsecurityhubsecuritycontrol.NewDataAwsccSecurityhubSecurityControlParametersValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSecurityhubSecurityControlParametersValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.property.boolean">Boolean</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.property.double">Double</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.property.enum">Enum</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.property.enumList">EnumList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.property.integer">Integer</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.property.integerList">IntegerList</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.property.string">String</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.property.stringList">StringList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValue">DataAwsccSecurityhubSecurityControlParametersValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Boolean`<sup>Required</sup> <a name="Boolean" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.property.boolean"></a>

```go
func Boolean() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Double`<sup>Required</sup> <a name="Double" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.property.double"></a>

```go
func Double() *f64
```

- *Type:* *f64

---

##### `Enum`<sup>Required</sup> <a name="Enum" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.property.enum"></a>

```go
func Enum() *string
```

- *Type:* *string

---

##### `EnumList`<sup>Required</sup> <a name="EnumList" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.property.enumList"></a>

```go
func EnumList() *[]*string
```

- *Type:* *[]*string

---

##### `Integer`<sup>Required</sup> <a name="Integer" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.property.integer"></a>

```go
func Integer() *f64
```

- *Type:* *f64

---

##### `IntegerList`<sup>Required</sup> <a name="IntegerList" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.property.integerList"></a>

```go
func IntegerList() *[]*f64
```

- *Type:* *[]*f64

---

##### `String`<sup>Required</sup> <a name="String" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.property.string"></a>

```go
func String() *string
```

- *Type:* *string

---

##### `StringList`<sup>Required</sup> <a name="StringList" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.property.stringList"></a>

```go
func StringList() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValueOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSecurityhubSecurityControlParametersValue
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubSecurityControl.DataAwsccSecurityhubSecurityControlParametersValue">DataAwsccSecurityhubSecurityControlParametersValue</a>

---



