# `dataAwsccEmrserverlessApplication` Submodule <a name="`dataAwsccEmrserverlessApplication` Submodule" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEmrserverlessApplication <a name="DataAwsccEmrserverlessApplication" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/emrserverless_application awscc_emrserverless_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.Initializer"></a>

```typescript
import { dataAwsccEmrserverlessApplication } from '@cdktn/provider-awscc'

new dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication(scope: Construct, id: string, config: DataAwsccEmrserverlessApplicationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationConfig">DataAwsccEmrserverlessApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationConfig">DataAwsccEmrserverlessApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEmrserverlessApplication resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.isConstruct"></a>

```typescript
import { dataAwsccEmrserverlessApplication } from '@cdktn/provider-awscc'

dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.isTerraformElement"></a>

```typescript
import { dataAwsccEmrserverlessApplication } from '@cdktn/provider-awscc'

dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.isTerraformDataSource"></a>

```typescript
import { dataAwsccEmrserverlessApplication } from '@cdktn/provider-awscc'

dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.generateConfigForImport"></a>

```typescript
import { dataAwsccEmrserverlessApplication } from '@cdktn/provider-awscc'

dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccEmrserverlessApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEmrserverlessApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEmrserverlessApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/emrserverless_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEmrserverlessApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.architecture">architecture</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.autoStartConfiguration">autoStartConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference">DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.autoStopConfiguration">autoStopConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference">DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.imageConfiguration">imageConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference">DataAwsccEmrserverlessApplicationImageConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.initialCapacity">initialCapacity</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList">DataAwsccEmrserverlessApplicationInitialCapacityList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.maximumCapacity">maximumCapacity</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference">DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference">DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.releaseLabel">releaseLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList">DataAwsccEmrserverlessApplicationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.workerTypeSpecifications">workerTypeSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap">DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.architecture"></a>

```typescript
public readonly architecture: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `autoStartConfiguration`<sup>Required</sup> <a name="autoStartConfiguration" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.autoStartConfiguration"></a>

```typescript
public readonly autoStartConfiguration: DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference">DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference</a>

---

##### `autoStopConfiguration`<sup>Required</sup> <a name="autoStopConfiguration" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.autoStopConfiguration"></a>

```typescript
public readonly autoStopConfiguration: DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference">DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference</a>

---

##### `imageConfiguration`<sup>Required</sup> <a name="imageConfiguration" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.imageConfiguration"></a>

```typescript
public readonly imageConfiguration: DataAwsccEmrserverlessApplicationImageConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference">DataAwsccEmrserverlessApplicationImageConfigurationOutputReference</a>

---

##### `initialCapacity`<sup>Required</sup> <a name="initialCapacity" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.initialCapacity"></a>

```typescript
public readonly initialCapacity: DataAwsccEmrserverlessApplicationInitialCapacityList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList">DataAwsccEmrserverlessApplicationInitialCapacityList</a>

---

##### `maximumCapacity`<sup>Required</sup> <a name="maximumCapacity" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.maximumCapacity"></a>

```typescript
public readonly maximumCapacity: DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference">DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.networkConfiguration"></a>

```typescript
public readonly networkConfiguration: DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference">DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference</a>

---

##### `releaseLabel`<sup>Required</sup> <a name="releaseLabel" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.releaseLabel"></a>

```typescript
public readonly releaseLabel: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.tags"></a>

```typescript
public readonly tags: DataAwsccEmrserverlessApplicationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList">DataAwsccEmrserverlessApplicationTagsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `workerTypeSpecifications`<sup>Required</sup> <a name="workerTypeSpecifications" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.workerTypeSpecifications"></a>

```typescript
public readonly workerTypeSpecifications: DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap">DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplication.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEmrserverlessApplicationAutoStartConfiguration <a name="DataAwsccEmrserverlessApplicationAutoStartConfiguration" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfiguration.Initializer"></a>

```typescript
import { dataAwsccEmrserverlessApplication } from '@cdktn/provider-awscc'

const dataAwsccEmrserverlessApplicationAutoStartConfiguration: dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfiguration = { ... }
```


### DataAwsccEmrserverlessApplicationAutoStopConfiguration <a name="DataAwsccEmrserverlessApplicationAutoStopConfiguration" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfiguration.Initializer"></a>

```typescript
import { dataAwsccEmrserverlessApplication } from '@cdktn/provider-awscc'

const dataAwsccEmrserverlessApplicationAutoStopConfiguration: dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfiguration = { ... }
```


### DataAwsccEmrserverlessApplicationConfig <a name="DataAwsccEmrserverlessApplicationConfig" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationConfig.Initializer"></a>

```typescript
import { dataAwsccEmrserverlessApplication } from '@cdktn/provider-awscc'

const dataAwsccEmrserverlessApplicationConfig: dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/emrserverless_application#id DataAwsccEmrserverlessApplication#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEmrserverlessApplicationImageConfiguration <a name="DataAwsccEmrserverlessApplicationImageConfiguration" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfiguration.Initializer"></a>

```typescript
import { dataAwsccEmrserverlessApplication } from '@cdktn/provider-awscc'

const dataAwsccEmrserverlessApplicationImageConfiguration: dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfiguration = { ... }
```


### DataAwsccEmrserverlessApplicationInitialCapacity <a name="DataAwsccEmrserverlessApplicationInitialCapacity" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacity.Initializer"></a>

```typescript
import { dataAwsccEmrserverlessApplication } from '@cdktn/provider-awscc'

const dataAwsccEmrserverlessApplicationInitialCapacity: dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacity = { ... }
```


### DataAwsccEmrserverlessApplicationInitialCapacityValue <a name="DataAwsccEmrserverlessApplicationInitialCapacityValue" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValue.Initializer"></a>

```typescript
import { dataAwsccEmrserverlessApplication } from '@cdktn/provider-awscc'

const dataAwsccEmrserverlessApplicationInitialCapacityValue: dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValue = { ... }
```


### DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfiguration <a name="DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfiguration" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfiguration.Initializer"></a>

```typescript
import { dataAwsccEmrserverlessApplication } from '@cdktn/provider-awscc'

const dataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfiguration: dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfiguration = { ... }
```


### DataAwsccEmrserverlessApplicationMaximumCapacity <a name="DataAwsccEmrserverlessApplicationMaximumCapacity" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacity.Initializer"></a>

```typescript
import { dataAwsccEmrserverlessApplication } from '@cdktn/provider-awscc'

const dataAwsccEmrserverlessApplicationMaximumCapacity: dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacity = { ... }
```


### DataAwsccEmrserverlessApplicationNetworkConfiguration <a name="DataAwsccEmrserverlessApplicationNetworkConfiguration" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfiguration.Initializer"></a>

```typescript
import { dataAwsccEmrserverlessApplication } from '@cdktn/provider-awscc'

const dataAwsccEmrserverlessApplicationNetworkConfiguration: dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfiguration = { ... }
```


### DataAwsccEmrserverlessApplicationTags <a name="DataAwsccEmrserverlessApplicationTags" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTags.Initializer"></a>

```typescript
import { dataAwsccEmrserverlessApplication } from '@cdktn/provider-awscc'

const dataAwsccEmrserverlessApplicationTags: dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTags = { ... }
```


### DataAwsccEmrserverlessApplicationWorkerTypeSpecifications <a name="DataAwsccEmrserverlessApplicationWorkerTypeSpecifications" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecifications.Initializer"></a>

```typescript
import { dataAwsccEmrserverlessApplication } from '@cdktn/provider-awscc'

const dataAwsccEmrserverlessApplicationWorkerTypeSpecifications: dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecifications = { ... }
```


### DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration <a name="DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration.Initializer"></a>

```typescript
import { dataAwsccEmrserverlessApplication } from '@cdktn/provider-awscc'

const dataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration: dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference <a name="DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccEmrserverlessApplication } from '@cdktn/provider-awscc'

new dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfiguration">DataAwsccEmrserverlessApplicationAutoStartConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEmrserverlessApplicationAutoStartConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStartConfiguration">DataAwsccEmrserverlessApplicationAutoStartConfiguration</a>

---


### DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference <a name="DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccEmrserverlessApplication } from '@cdktn/provider-awscc'

new dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.property.idleTimeoutMinutes">idleTimeoutMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfiguration">DataAwsccEmrserverlessApplicationAutoStopConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `idleTimeoutMinutes`<sup>Required</sup> <a name="idleTimeoutMinutes" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.property.idleTimeoutMinutes"></a>

```typescript
public readonly idleTimeoutMinutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEmrserverlessApplicationAutoStopConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationAutoStopConfiguration">DataAwsccEmrserverlessApplicationAutoStopConfiguration</a>

---


### DataAwsccEmrserverlessApplicationImageConfigurationOutputReference <a name="DataAwsccEmrserverlessApplicationImageConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccEmrserverlessApplication } from '@cdktn/provider-awscc'

new dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.property.imageUri">imageUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfiguration">DataAwsccEmrserverlessApplicationImageConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `imageUri`<sup>Required</sup> <a name="imageUri" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.property.imageUri"></a>

```typescript
public readonly imageUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEmrserverlessApplicationImageConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationImageConfiguration">DataAwsccEmrserverlessApplicationImageConfiguration</a>

---


### DataAwsccEmrserverlessApplicationInitialCapacityList <a name="DataAwsccEmrserverlessApplicationInitialCapacityList" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.Initializer"></a>

```typescript
import { dataAwsccEmrserverlessApplication } from '@cdktn/provider-awscc'

new dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.get"></a>

```typescript
public get(index: number): DataAwsccEmrserverlessApplicationInitialCapacityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEmrserverlessApplicationInitialCapacityOutputReference <a name="DataAwsccEmrserverlessApplicationInitialCapacityOutputReference" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.Initializer"></a>

```typescript
import { dataAwsccEmrserverlessApplication } from '@cdktn/provider-awscc'

new dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference">DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacity">DataAwsccEmrserverlessApplicationInitialCapacity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.property.value"></a>

```typescript
public readonly value: DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference">DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEmrserverlessApplicationInitialCapacity;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacity">DataAwsccEmrserverlessApplicationInitialCapacity</a>

---


### DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference <a name="DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.Initializer"></a>

```typescript
import { dataAwsccEmrserverlessApplication } from '@cdktn/provider-awscc'

new dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.property.workerConfiguration">workerConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference">DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.property.workerCount">workerCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValue">DataAwsccEmrserverlessApplicationInitialCapacityValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workerConfiguration`<sup>Required</sup> <a name="workerConfiguration" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.property.workerConfiguration"></a>

```typescript
public readonly workerConfiguration: DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference">DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference</a>

---

##### `workerCount`<sup>Required</sup> <a name="workerCount" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.property.workerCount"></a>

```typescript
public readonly workerCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEmrserverlessApplicationInitialCapacityValue;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValue">DataAwsccEmrserverlessApplicationInitialCapacityValue</a>

---


### DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference <a name="DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccEmrserverlessApplication } from '@cdktn/provider-awscc'

new dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.cpu">cpu</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.disk">disk</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.memory">memory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfiguration">DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.cpu"></a>

```typescript
public readonly cpu: string;
```

- *Type:* string

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.disk"></a>

```typescript
public readonly disk: string;
```

- *Type:* string

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.memory"></a>

```typescript
public readonly memory: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfiguration">DataAwsccEmrserverlessApplicationInitialCapacityValueWorkerConfiguration</a>

---


### DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference <a name="DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.Initializer"></a>

```typescript
import { dataAwsccEmrserverlessApplication } from '@cdktn/provider-awscc'

new dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.property.cpu">cpu</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.property.disk">disk</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.property.memory">memory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacity">DataAwsccEmrserverlessApplicationMaximumCapacity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.property.cpu"></a>

```typescript
public readonly cpu: string;
```

- *Type:* string

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.property.disk"></a>

```typescript
public readonly disk: string;
```

- *Type:* string

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.property.memory"></a>

```typescript
public readonly memory: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEmrserverlessApplicationMaximumCapacity;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationMaximumCapacity">DataAwsccEmrserverlessApplicationMaximumCapacity</a>

---


### DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference <a name="DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccEmrserverlessApplication } from '@cdktn/provider-awscc'

new dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfiguration">DataAwsccEmrserverlessApplicationNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEmrserverlessApplicationNetworkConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationNetworkConfiguration">DataAwsccEmrserverlessApplicationNetworkConfiguration</a>

---


### DataAwsccEmrserverlessApplicationTagsList <a name="DataAwsccEmrserverlessApplicationTagsList" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.Initializer"></a>

```typescript
import { dataAwsccEmrserverlessApplication } from '@cdktn/provider-awscc'

new dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.get"></a>

```typescript
public get(index: number): DataAwsccEmrserverlessApplicationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEmrserverlessApplicationTagsOutputReference <a name="DataAwsccEmrserverlessApplicationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEmrserverlessApplication } from '@cdktn/provider-awscc'

new dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTags">DataAwsccEmrserverlessApplicationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEmrserverlessApplicationTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationTags">DataAwsccEmrserverlessApplicationTags</a>

---


### DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference <a name="DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccEmrserverlessApplication } from '@cdktn/provider-awscc'

new dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.property.imageUri">imageUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration">DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `imageUri`<sup>Required</sup> <a name="imageUri" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.property.imageUri"></a>

```typescript
public readonly imageUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration">DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfiguration</a>

---


### DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap <a name="DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap.Initializer"></a>

```typescript
import { dataAwsccEmrserverlessApplication } from '@cdktn/provider-awscc'

new dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap.get"></a>

```typescript
public get(key: string): DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsMap.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference <a name="DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEmrserverlessApplication } from '@cdktn/provider-awscc'

new dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectKey: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.property.imageConfiguration">imageConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference">DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecifications">DataAwsccEmrserverlessApplicationWorkerTypeSpecifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `imageConfiguration`<sup>Required</sup> <a name="imageConfiguration" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.property.imageConfiguration"></a>

```typescript
public readonly imageConfiguration: DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference">DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsImageConfigurationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEmrserverlessApplicationWorkerTypeSpecifications;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEmrserverlessApplication.DataAwsccEmrserverlessApplicationWorkerTypeSpecifications">DataAwsccEmrserverlessApplicationWorkerTypeSpecifications</a>

---



