# `dataAwsccAppintegrationsEventIntegrations` Submodule <a name="`dataAwsccAppintegrationsEventIntegrations` Submodule" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccAppintegrationsEventIntegrations <a name="DataAwsccAppintegrationsEventIntegrations" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/appintegrations_event_integrations awscc_appintegrations_event_integrations}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.Initializer"></a>

```typescript
import { dataAwsccAppintegrationsEventIntegrations } from '@cdktn/provider-awscc'

new dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations(scope: Construct, id: string, config?: DataAwsccAppintegrationsEventIntegrationsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrationsConfig">DataAwsccAppintegrationsEventIntegrationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrationsConfig">DataAwsccAppintegrationsEventIntegrationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccAppintegrationsEventIntegrations resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.isConstruct"></a>

```typescript
import { dataAwsccAppintegrationsEventIntegrations } from '@cdktn/provider-awscc'

dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.isTerraformElement"></a>

```typescript
import { dataAwsccAppintegrationsEventIntegrations } from '@cdktn/provider-awscc'

dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.isTerraformDataSource"></a>

```typescript
import { dataAwsccAppintegrationsEventIntegrations } from '@cdktn/provider-awscc'

dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.generateConfigForImport"></a>

```typescript
import { dataAwsccAppintegrationsEventIntegrations } from '@cdktn/provider-awscc'

dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccAppintegrationsEventIntegrations resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccAppintegrationsEventIntegrations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccAppintegrationsEventIntegrations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/appintegrations_event_integrations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccAppintegrationsEventIntegrations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.property.ids">ids</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ids`<sup>Required</sup> <a name="ids" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.property.ids"></a>

```typescript
public readonly ids: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrations.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccAppintegrationsEventIntegrationsConfig <a name="DataAwsccAppintegrationsEventIntegrationsConfig" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrationsConfig.Initializer"></a>

```typescript
import { dataAwsccAppintegrationsEventIntegrations } from '@cdktn/provider-awscc'

const dataAwsccAppintegrationsEventIntegrationsConfig: dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrationsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrationsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrationsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrationsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrationsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrationsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrationsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrationsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrationsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrationsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrationsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrationsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrationsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccAppintegrationsEventIntegrations.DataAwsccAppintegrationsEventIntegrationsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---



