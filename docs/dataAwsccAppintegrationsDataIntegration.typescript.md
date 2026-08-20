# `dataAwsccAppintegrationsDataIntegration` Submodule <a name="`dataAwsccAppintegrationsDataIntegration` Submodule" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccAppintegrationsDataIntegration <a name="DataAwsccAppintegrationsDataIntegration" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/appintegrations_data_integration awscc_appintegrations_data_integration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.Initializer"></a>

```typescript
import { dataAwsccAppintegrationsDataIntegration } from '@cdktn/provider-awscc'

new dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration(scope: Construct, id: string, config: DataAwsccAppintegrationsDataIntegrationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationConfig">DataAwsccAppintegrationsDataIntegrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationConfig">DataAwsccAppintegrationsDataIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccAppintegrationsDataIntegration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.isConstruct"></a>

```typescript
import { dataAwsccAppintegrationsDataIntegration } from '@cdktn/provider-awscc'

dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.isTerraformElement"></a>

```typescript
import { dataAwsccAppintegrationsDataIntegration } from '@cdktn/provider-awscc'

dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.isTerraformDataSource"></a>

```typescript
import { dataAwsccAppintegrationsDataIntegration } from '@cdktn/provider-awscc'

dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.generateConfigForImport"></a>

```typescript
import { dataAwsccAppintegrationsDataIntegration } from '@cdktn/provider-awscc'

dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccAppintegrationsDataIntegration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccAppintegrationsDataIntegration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccAppintegrationsDataIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/appintegrations_data_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccAppintegrationsDataIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.dataIntegrationArn">dataIntegrationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.dataIntegrationId">dataIntegrationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.fileConfiguration">fileConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference">DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.kmsKey">kmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.objectConfiguration">objectConfiguration</a></code> | <code>cdktn.AnyMapMap</code> | Terraform type: `map(map(list(string)))`. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.scheduleConfig">scheduleConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference">DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.sourceUri">sourceUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList">DataAwsccAppintegrationsDataIntegrationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `dataIntegrationArn`<sup>Required</sup> <a name="dataIntegrationArn" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.dataIntegrationArn"></a>

```typescript
public readonly dataIntegrationArn: string;
```

- *Type:* string

---

##### `dataIntegrationId`<sup>Required</sup> <a name="dataIntegrationId" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.dataIntegrationId"></a>

```typescript
public readonly dataIntegrationId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `fileConfiguration`<sup>Required</sup> <a name="fileConfiguration" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.fileConfiguration"></a>

```typescript
public readonly fileConfiguration: DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference">DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference</a>

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `objectConfiguration`<sup>Required</sup> <a name="objectConfiguration" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.objectConfiguration"></a>

```typescript
public readonly objectConfiguration: AnyMapMap;
```

- *Type:* cdktn.AnyMapMap

Terraform type: `map(map(list(string)))`.

This nesting is deeper than the typed wrapper classes in the core cdktn package; it is exposed as `AnyMapMap` and values below that boundary are untyped tokens.

---

##### `scheduleConfig`<sup>Required</sup> <a name="scheduleConfig" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.scheduleConfig"></a>

```typescript
public readonly scheduleConfig: DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference">DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference</a>

---

##### `sourceUri`<sup>Required</sup> <a name="sourceUri" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.sourceUri"></a>

```typescript
public readonly sourceUri: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.tags"></a>

```typescript
public readonly tags: DataAwsccAppintegrationsDataIntegrationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList">DataAwsccAppintegrationsDataIntegrationTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccAppintegrationsDataIntegrationConfig <a name="DataAwsccAppintegrationsDataIntegrationConfig" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationConfig.Initializer"></a>

```typescript
import { dataAwsccAppintegrationsDataIntegration } from '@cdktn/provider-awscc'

const dataAwsccAppintegrationsDataIntegrationConfig: dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/appintegrations_data_integration#id DataAwsccAppintegrationsDataIntegration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccAppintegrationsDataIntegrationFileConfiguration <a name="DataAwsccAppintegrationsDataIntegrationFileConfiguration" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfiguration.Initializer"></a>

```typescript
import { dataAwsccAppintegrationsDataIntegration } from '@cdktn/provider-awscc'

const dataAwsccAppintegrationsDataIntegrationFileConfiguration: dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfiguration = { ... }
```


### DataAwsccAppintegrationsDataIntegrationScheduleConfig <a name="DataAwsccAppintegrationsDataIntegrationScheduleConfig" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfig.Initializer"></a>

```typescript
import { dataAwsccAppintegrationsDataIntegration } from '@cdktn/provider-awscc'

const dataAwsccAppintegrationsDataIntegrationScheduleConfig: dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfig = { ... }
```


### DataAwsccAppintegrationsDataIntegrationTags <a name="DataAwsccAppintegrationsDataIntegrationTags" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTags.Initializer"></a>

```typescript
import { dataAwsccAppintegrationsDataIntegration } from '@cdktn/provider-awscc'

const dataAwsccAppintegrationsDataIntegrationTags: dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference <a name="DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccAppintegrationsDataIntegration } from '@cdktn/provider-awscc'

new dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.property.filters">filters</a></code> | <code>cdktn.StringListMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.property.folders">folders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfiguration">DataAwsccAppintegrationsDataIntegrationFileConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.property.filters"></a>

```typescript
public readonly filters: StringListMap;
```

- *Type:* cdktn.StringListMap

---

##### `folders`<sup>Required</sup> <a name="folders" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.property.folders"></a>

```typescript
public readonly folders: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAppintegrationsDataIntegrationFileConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfiguration">DataAwsccAppintegrationsDataIntegrationFileConfiguration</a>

---


### DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference <a name="DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccAppintegrationsDataIntegration } from '@cdktn/provider-awscc'

new dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.property.firstExecutionFrom">firstExecutionFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.property.object">object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.property.scheduleExpression">scheduleExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfig">DataAwsccAppintegrationsDataIntegrationScheduleConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `firstExecutionFrom`<sup>Required</sup> <a name="firstExecutionFrom" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.property.firstExecutionFrom"></a>

```typescript
public readonly firstExecutionFrom: string;
```

- *Type:* string

---

##### `object`<sup>Required</sup> <a name="object" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

---

##### `scheduleExpression`<sup>Required</sup> <a name="scheduleExpression" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.property.scheduleExpression"></a>

```typescript
public readonly scheduleExpression: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAppintegrationsDataIntegrationScheduleConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfig">DataAwsccAppintegrationsDataIntegrationScheduleConfig</a>

---


### DataAwsccAppintegrationsDataIntegrationTagsList <a name="DataAwsccAppintegrationsDataIntegrationTagsList" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.Initializer"></a>

```typescript
import { dataAwsccAppintegrationsDataIntegration } from '@cdktn/provider-awscc'

new dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.get"></a>

```typescript
public get(index: number): DataAwsccAppintegrationsDataIntegrationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccAppintegrationsDataIntegrationTagsOutputReference <a name="DataAwsccAppintegrationsDataIntegrationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccAppintegrationsDataIntegration } from '@cdktn/provider-awscc'

new dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTags">DataAwsccAppintegrationsDataIntegrationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccAppintegrationsDataIntegrationTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTags">DataAwsccAppintegrationsDataIntegrationTags</a>

---



