# `eventsEventBusPolicy` Submodule <a name="`eventsEventBusPolicy` Submodule" id="@cdktn/provider-awscc.eventsEventBusPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventsEventBusPolicy <a name="EventsEventBusPolicy" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_event_bus_policy awscc_events_event_bus_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer"></a>

```java
import io.cdktn.providers.awscc.events_event_bus_policy.EventsEventBusPolicy;

EventsEventBusPolicy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .statementId(java.lang.String)
//  .action(java.lang.String)
//  .condition(EventsEventBusPolicyCondition)
//  .eventBusName(java.lang.String)
//  .principal(java.lang.String)
//  .statement(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.statementId">statementId</a></code> | <code>java.lang.String</code> | An identifier string for the external account that you are granting permissions to. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.action">action</a></code> | <code>java.lang.String</code> | The action that you are enabling the other account to perform. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyCondition">EventsEventBusPolicyCondition</a></code> | This parameter enables you to limit the permission to accounts that fulfill a certain condition, such as being a member of a certain AWS organization. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.eventBusName">eventBusName</a></code> | <code>java.lang.String</code> | The name of the event bus associated with the rule. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.principal">principal</a></code> | <code>java.lang.String</code> | The 12-digit AWS account ID that you are permitting to put events to your default event bus. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.statement">statement</a></code> | <code>java.lang.String</code> | A JSON string that describes the permission policy statement. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `statementId`<sup>Required</sup> <a name="statementId" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.statementId"></a>

- *Type:* java.lang.String

An identifier string for the external account that you are granting permissions to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_event_bus_policy#statement_id EventsEventBusPolicy#statement_id}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.action"></a>

- *Type:* java.lang.String

The action that you are enabling the other account to perform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_event_bus_policy#action EventsEventBusPolicy#action}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyCondition">EventsEventBusPolicyCondition</a>

This parameter enables you to limit the permission to accounts that fulfill a certain condition, such as being a member of a certain AWS organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_event_bus_policy#condition EventsEventBusPolicy#condition}

---

##### `eventBusName`<sup>Optional</sup> <a name="eventBusName" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.eventBusName"></a>

- *Type:* java.lang.String

The name of the event bus associated with the rule.

If you omit this, the default event bus is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_event_bus_policy#event_bus_name EventsEventBusPolicy#event_bus_name}

---

##### `principal`<sup>Optional</sup> <a name="principal" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.principal"></a>

- *Type:* java.lang.String

The 12-digit AWS account ID that you are permitting to put events to your default event bus.

Specify "*" to permit any account to put events to your default event bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_event_bus_policy#principal EventsEventBusPolicy#principal}

---

##### `statement`<sup>Optional</sup> <a name="statement" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.Initializer.parameter.statement"></a>

- *Type:* java.lang.String

A JSON string that describes the permission policy statement.

You can include a Policy parameter in the request instead of using the StatementId, Action, Principal, or Condition parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_event_bus_policy#statement EventsEventBusPolicy#statement}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.resetEventBusName">resetEventBusName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.resetPrincipal">resetPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.resetStatement">resetStatement</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.putCondition"></a>

```java
public void putCondition(EventsEventBusPolicyCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyCondition">EventsEventBusPolicyCondition</a>

---

##### `resetAction` <a name="resetAction" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.resetAction"></a>

```java
public void resetAction()
```

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetEventBusName` <a name="resetEventBusName" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.resetEventBusName"></a>

```java
public void resetEventBusName()
```

##### `resetPrincipal` <a name="resetPrincipal" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.resetPrincipal"></a>

```java
public void resetPrincipal()
```

##### `resetStatement` <a name="resetStatement" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.resetStatement"></a>

```java
public void resetStatement()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a EventsEventBusPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.isConstruct"></a>

```java
import io.cdktn.providers.awscc.events_event_bus_policy.EventsEventBusPolicy;

EventsEventBusPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.events_event_bus_policy.EventsEventBusPolicy;

EventsEventBusPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.events_event_bus_policy.EventsEventBusPolicy;

EventsEventBusPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.events_event_bus_policy.EventsEventBusPolicy;

EventsEventBusPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),EventsEventBusPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a EventsEventBusPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the EventsEventBusPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing EventsEventBusPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_event_bus_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the EventsEventBusPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference">EventsEventBusPolicyConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.conditionInput">conditionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyCondition">EventsEventBusPolicyCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.eventBusNameInput">eventBusNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.principalInput">principalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.statementIdInput">statementIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.statementInput">statementInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.eventBusName">eventBusName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.principal">principal</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.statement">statement</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.statementId">statementId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.condition"></a>

```java
public EventsEventBusPolicyConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference">EventsEventBusPolicyConditionOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.conditionInput"></a>

```java
public IResolvable|EventsEventBusPolicyCondition getConditionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyCondition">EventsEventBusPolicyCondition</a>

---

##### `eventBusNameInput`<sup>Optional</sup> <a name="eventBusNameInput" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.eventBusNameInput"></a>

```java
public java.lang.String getEventBusNameInput();
```

- *Type:* java.lang.String

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.principalInput"></a>

```java
public java.lang.String getPrincipalInput();
```

- *Type:* java.lang.String

---

##### `statementIdInput`<sup>Optional</sup> <a name="statementIdInput" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.statementIdInput"></a>

```java
public java.lang.String getStatementIdInput();
```

- *Type:* java.lang.String

---

##### `statementInput`<sup>Optional</sup> <a name="statementInput" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.statementInput"></a>

```java
public java.lang.String getStatementInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `eventBusName`<sup>Required</sup> <a name="eventBusName" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.eventBusName"></a>

```java
public java.lang.String getEventBusName();
```

- *Type:* java.lang.String

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.principal"></a>

```java
public java.lang.String getPrincipal();
```

- *Type:* java.lang.String

---

##### `statement`<sup>Required</sup> <a name="statement" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.statement"></a>

```java
public java.lang.String getStatement();
```

- *Type:* java.lang.String

---

##### `statementId`<sup>Required</sup> <a name="statementId" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.statementId"></a>

```java
public java.lang.String getStatementId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EventsEventBusPolicyCondition <a name="EventsEventBusPolicyCondition" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyCondition.Initializer"></a>

```java
import io.cdktn.providers.awscc.events_event_bus_policy.EventsEventBusPolicyCondition;

EventsEventBusPolicyCondition.builder()
//  .key(java.lang.String)
//  .type(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyCondition.property.key">key</a></code> | <code>java.lang.String</code> | Specifies the value for the key. Currently, this must be the ID of the organization. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyCondition.property.type">type</a></code> | <code>java.lang.String</code> | Specifies the type of condition. Currently the only supported value is StringEquals. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyCondition.property.value">value</a></code> | <code>java.lang.String</code> | Specifies the key for the condition. Currently the only supported key is aws:PrincipalOrgID. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyCondition.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Specifies the value for the key. Currently, this must be the ID of the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_event_bus_policy#key EventsEventBusPolicy#key}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyCondition.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Specifies the type of condition. Currently the only supported value is StringEquals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_event_bus_policy#type EventsEventBusPolicy#type}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyCondition.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Specifies the key for the condition. Currently the only supported key is aws:PrincipalOrgID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_event_bus_policy#value EventsEventBusPolicy#value}

---

### EventsEventBusPolicyConfig <a name="EventsEventBusPolicyConfig" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.events_event_bus_policy.EventsEventBusPolicyConfig;

EventsEventBusPolicyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .statementId(java.lang.String)
//  .action(java.lang.String)
//  .condition(EventsEventBusPolicyCondition)
//  .eventBusName(java.lang.String)
//  .principal(java.lang.String)
//  .statement(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.statementId">statementId</a></code> | <code>java.lang.String</code> | An identifier string for the external account that you are granting permissions to. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.action">action</a></code> | <code>java.lang.String</code> | The action that you are enabling the other account to perform. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyCondition">EventsEventBusPolicyCondition</a></code> | This parameter enables you to limit the permission to accounts that fulfill a certain condition, such as being a member of a certain AWS organization. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.eventBusName">eventBusName</a></code> | <code>java.lang.String</code> | The name of the event bus associated with the rule. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.principal">principal</a></code> | <code>java.lang.String</code> | The 12-digit AWS account ID that you are permitting to put events to your default event bus. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.statement">statement</a></code> | <code>java.lang.String</code> | A JSON string that describes the permission policy statement. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `statementId`<sup>Required</sup> <a name="statementId" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.statementId"></a>

```java
public java.lang.String getStatementId();
```

- *Type:* java.lang.String

An identifier string for the external account that you are granting permissions to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_event_bus_policy#statement_id EventsEventBusPolicy#statement_id}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

The action that you are enabling the other account to perform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_event_bus_policy#action EventsEventBusPolicy#action}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.condition"></a>

```java
public EventsEventBusPolicyCondition getCondition();
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyCondition">EventsEventBusPolicyCondition</a>

This parameter enables you to limit the permission to accounts that fulfill a certain condition, such as being a member of a certain AWS organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_event_bus_policy#condition EventsEventBusPolicy#condition}

---

##### `eventBusName`<sup>Optional</sup> <a name="eventBusName" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.eventBusName"></a>

```java
public java.lang.String getEventBusName();
```

- *Type:* java.lang.String

The name of the event bus associated with the rule.

If you omit this, the default event bus is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_event_bus_policy#event_bus_name EventsEventBusPolicy#event_bus_name}

---

##### `principal`<sup>Optional</sup> <a name="principal" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.principal"></a>

```java
public java.lang.String getPrincipal();
```

- *Type:* java.lang.String

The 12-digit AWS account ID that you are permitting to put events to your default event bus.

Specify "*" to permit any account to put events to your default event bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_event_bus_policy#principal EventsEventBusPolicy#principal}

---

##### `statement`<sup>Optional</sup> <a name="statement" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConfig.property.statement"></a>

```java
public java.lang.String getStatement();
```

- *Type:* java.lang.String

A JSON string that describes the permission policy statement.

You can include a Policy parameter in the request instead of using the StatementId, Action, Principal, or Condition parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_event_bus_policy#statement EventsEventBusPolicy#statement}

---

## Classes <a name="Classes" id="Classes"></a>

### EventsEventBusPolicyConditionOutputReference <a name="EventsEventBusPolicyConditionOutputReference" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.events_event_bus_policy.EventsEventBusPolicyConditionOutputReference;

new EventsEventBusPolicyConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.resetType"></a>

```java
public void resetType()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyCondition">EventsEventBusPolicyCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyConditionOutputReference.property.internalValue"></a>

```java
public IResolvable|EventsEventBusPolicyCondition getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.eventsEventBusPolicy.EventsEventBusPolicyCondition">EventsEventBusPolicyCondition</a>

---



